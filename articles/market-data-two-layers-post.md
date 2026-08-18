---
title:  "I Thought My Market Data Class Was Done. Then I Read How the Pros Build Theirs"
date: "2026-08-16"
excerpt: "The lessons learned from working on open-source projects, specifically revolving around OpenGamma Strata's trade pricing and risk engines"
---

I've been building software projects outside of work for a while now, and I've never really talked about them here — so before I get into this one, let me explain why I spend my own time doing more of what I already do all day.

I support a live commodities trading floor. One of my biggest goals is to become the person people come to when something breaks in production — the one who understands, top to bottom, how these systems are built and why they fail. These kinds of engineers are invaluable to the business. So on my own time, at my own pace, I've been reverse-engineering how real production trading software is actually designed — writing my own ETRM prototype and studying the architecture of open-source codebases. It's turned into the fastest way I've found to understand the "why" behind the systems I troubleshoot every day.

Which brings me to this week.

I'd been building out the market data layer of my ETRM prototype and I was feeling good about it. I had a class — `MarketDataProvider` — that held everything the pricing side needed: spot prices, forward curves, volatility surfaces, risk-free rates, historical data. It also had the methods to hand all of that back out: give me the forward price for this date, the vol for this strike on an option trade, the rate for this tenor. It compiled, my tests passed, and I moved on.

Then I pulled out the big guns and opened up a real production library, reading how they solved the exact same problem.

The library is OpenGamma Strata — an open-source quant library that real desks use for pricing and risk. I've been treating it as a reference, not to copy line for line, but to reverse-engineer the decisions behind it. Why did they structure the design this way? What did they know that I didn't?

I expected my design to basically line up with theirs, and although my ideas were correct, OpenGamma's implementation took testing and design patterns to a whole new level. Understanding this gap taught me one of the most important ideas I've come across in building any serious system.

## My one class was actually two

Here's roughly what I had:

```java
class MarketDataProvider {
    // data the market gave me
    Map<Commodity, Double>            spotPrices;
    Map<Commodity, PriceCurve>        forwardCurves;
    Map<Commodity, VolatilitySurface> volSurfaces;
    Map<Tenor, Double>                riskFreeRates;
    Map<Commodity, TimeSeries>        historicalData;

    // things I calculate
    double getForwardPrice(Commodity c, LocalDate date) { ... }
    double getVolatility(Commodity c, double strike, ...) { ... }
    double getRiskFreeRate(Tenor t) { ... }
}
```

It has the data, and it has the methods that use the data. One tidy home for everything market-related.

But look closer at what's actually there. Some of it is data the market handed me directly — a spot price is a number that exists in the world. I observed it, I wrote it down. And some of it is data I compute — a forward price for an arbitrary date isn't observed anywhere, it's interpolated off a curve. A vol for a specific strike is calculated off a surface.

Those are two completely different kinds of data. One is raw. One is derived. And I had them living in the same class with no line between them.

## How Strata draws the line

The first thing I noticed digging into Strata is that they flat-out refuse to mix those two. What I'd crammed into one class, they split into two distinct layers.

The bottom layer is pure raw market data. In Strata it's `ImmutableMarketData`, and it is exactly what the name says — a store of observed values and nothing else. No calculations. No interpolation. Just a typed key-value store: here is the data the market gave us, each piece tagged with an identifier that says precisely what it is. That's the whole job. It does not know how to compute a forward price, and it doesn't try.

The second layer sits on top of that and is where all the computing happens. In Strata it's the `ImmutableRatesProvider`. It's built *from* the raw layer, and it's the derived layer that answers questions — give me the discount factor for this date, the rate for this index. It's a view. It takes raw inputs and derives answers.

Raw data on the bottom. Computed view on top. A hard boundary between them.

The moment I saw it, my own class looked obviously wrong. I had a bucket of observed data and a pile of derivation logic holding hands with nothing separating them — and I'd never have questioned it if I hadn't gone looking.

## Why this actually matters in a production library

At first this felt like architectural nitpicking. It isn't. Once I sat with it, the reasons the separation matters in a trading system specifically started stacking up.

**Auditability.** When a P&L number looks wrong, the very first question is: is the *input* wrong — potentially stale data — or is the actual *calculation* wrong? If your raw data and your derived data live in the same place, you can't cleanly answer that. Split them, and you can look at the raw layer and say "the market data is correct" — or "the market data is stale" — completely independently of any math sitting on top of it.

**Reproducibility.** If I keep the raw observed inputs as their own immutable object, I can rerun the exact same valuation tomorrow, or on a different machine, and get the exact same answer. The raw layer is the source of truth. The computed layer is disposable — I can always rebuild it from the raw data.

**Scenario analysis.** Stress testing, in a lot of cases, is just "change the raw inputs and recompute the view." If raw and computed are tangled together, that's a nightmare to do safely. If they're separated, a scenario is clean: take the raw layer, bump it, build a fresh view on top of the bumped data. The base case never gets touched.

**Testing.** I can test the raw store with simple data — did it hold what I put in it? I can test the computation logic separately by feeding it known inputs and checking the outputs. Two small, focused test surfaces instead of one tangled one.

None of this is specific to trading. Any enterprise-grade system hits the same wall: the shortcuts that are harmless in a small app become the exact thing that makes a large one impossible to maintain. Separating concerns, drawing clean boundaries between what a component owns and what it doesn't, and planning for the edge cases instead of patching them in later — that's the line between code that happens to work and a system people can actually trust, change, and scale.

## What I actually changed

So I split it. My raw observables — spot prices, and the raw curves, surfaces, and rate points as the market gave them — moved into their own layer whose only job is to hold data. My derivation logic — the interpolation, the lookups, the "give me a forward price for this date" methods — moved into a provider that's built on top of that raw layer.

Mine is still simpler than Strata's and specialized for commodities, which is on purpose. But the *shape* of it now matches the shape the pros use — for reasons I actually understand, instead of reasons I copied.

## The bigger lesson

The thing I keep coming back to isn't the market data split itself. It's that I never would have found it building in a vacuum. My version worked. My tests passed. I felt done. The only reason I found a better design is that I went and read how people with far more experience solved the same problem, and kept asking why until it made sense.

That's become my whole approach to getting better at this. Don't just make it work — go find how the people who do this for a living structure it, and dig until you understand why they drew the lines where they did. Tutorials teach you how to make something run. Reading production code teaches you why real systems are shaped the way they are.

I'm going to keep pulling this library apart layer by layer and sharing what I find as I go. This one changed how I think about every system I build, not just this one.
