---
title:  "ETRM Dev & Support: The Most Underrated Job in Tech?"
date: "2026-06-21"
excerpt: "The point of view of someone working a production support and ETRM dev role, the systems that this path involes and the technical skillset"
---

Honestly, I think ETRM development might be one of the most underrated careers in all of tech.

In software, one of the biggest moves — especially for new grads — is landing a role at a top FAANG, AI, or web dev company. The money, the prestige, the career mobility: it was all there, as if making it past the endless technical rounds was a golden ticket to a successful career. A lot of those benefits still exist, but there's no doubt the developer career has been turned on its head. Cycle after cycle of layoffs, a focus on productivity like never before, and a growing cloud of uncertainty hanging over the future of the industry. All of it has put massive pressure on those of us still early in our careers to evolve our skillsets and move with the technology.

The one path that was never on my radar as a computer science student was ETRM — Energy Trading and Risk Management — development and support.

About 14 months ago, I got my first taste of what commodities trading actually looks like on a live trading floor at one of the largest financial institutions in the world. Part of me was just grateful to have a job, but I also knew I had everything to prove. Luckily, I landed on a fantastic team, and they've taken me from knowing almost nothing to where I am now.

Every trading floor runs on dozens of applications. It starts at the very beginning of a trade's lifecycle, where the trade is routed from the exchange via FIX message into one of the bank's systems, and continues all the way through to when it's picked up by the pricing and risk engines. I got the chance to support all kinds of these applications and work closely with the developers behind each one — which eventually led me to the heart of the trading floor.

## OpenLink Endur

In many trading systems, OpenLink Endur serves as the center for the trade cycle, the pricing and risk engines, and settlements and invoicing. It's a beast of an application — many different layers, all working together to keep the wheels of the business moving.

Here are the pieces I work with:

- **Deal Capture / Trading Manager** — how trades get booked and validated
- **Market Data & Connex** — curves, vols, and feeds coming in via the integration layer
- **Simulation / Sim** — the pricing and risk engine that values the book
- **The Scripting Layer** — JVS / OpenComponents (and legacy AVS), the customization surface where the dev work actually lives
- **EOD Batch** — the nightly choreography
- **Settlements & Invoicing** — where deals turn into cash and documents
- **Reporting** — results back out to risk, finance, and ops

### Deal Capture / Trading Manager

The Trading Manager is the central interface for interacting with anything deal-related. As time moves, so does a trade's lifecycle, passing through different stages — newly booked, validated, amended, settled, and so on. Each stage is a step that has to be logged for audit purposes, and downstream systems rely on the data captured at every stage. From the Trading Manager you can select trades by commodity, trade type, or stage, and run scripts that interface with those trades directly.

### Market Data & Connex

Every trading system leans heavily on static data and price data. Endur can store both historical and forward prices, which serve different purposes across risk analysis and strategy backtesting. Static data flows into the system as well, where it's normalized and cached for accurate identification and performance.

### Simulation / Sim

Sim is where the book actually gets valued. It pulls the relevant curves and vols, applies the pricing models, and produces the numbers the desk and risk teams live by — mark-to-market, P&L, and the sensitivities behind every position. It's the engine room: most of what the rest of the system does is either feeding Sim the right inputs or carrying its outputs somewhere useful.

### EOD Batch

This is the nightly choreography of the trading floor, where trades are amended and marked with the day's current pricing. Prices are sourced from different market data systems, and simulations are run at the book level to feed the risk engines. It all runs inside a window — everything has to finish before the next trading day begins.

### Settlements & Invoicing

This is where a trade's life ends and clients actually get paid. By the time a deal reaches this stage it's done its job on the pricing and risk side — now the focus shifts to turning positions into real money moving between counterparties.

The complexity here lives in the details. Every counterparty comes with its own settlement instructions — the bank accounts, payment routing, and standing instructions that tell the system where money is supposed to go. Those instructions, along with counterparty contracts, payment IDs, and value dates, are all managed through a static data feed that has to stay accurate. A single wrong account or stale instruction can hold up a payment or send it to the wrong place.

Settlements also rarely happen one trade at a time. Cash flows get netted — multiple obligations with the same counterparty for a given date get combined into a single payment — which keeps the number of actual transfers manageable and cuts down operational risk. From there, invoices are generated for physical deliveries and financial settlements, payments are sent out, and the whole thing has to reconcile against what actually clears. When something doesn't match, that break has to be chased down and resolved before the books are clean.

It's easy to think of settlement as the "boring" back-office end of the trade, but it's where everything upstream finally has to be correct. A mispriced curve or a missed amendment doesn't really cost anyone until it shows up as the wrong number on an invoice or a payment that won't reconcile.

### Reporting

Once Sim and EOD have done their work, the results have to get back out — to risk, to finance, to ops. Reporting is the layer that turns positions, P&L, and exposures into something the rest of the business can actually act on.

### The Scripting Layer

This is where the development work comes in, and it's a very different flavor from traditional software development. OpenLink scripts are primarily written in JVS — a Java-based language with some key extensions. JVS defines many of the core objects and APIs used to calculate specific trade data: expiry dates, contract codes, date sequences, and more, all running on the OpenLink pricing engine behind the scenes. Because ION has laid the foundation with OpenLink, building new features is often less about raw coding and more about understanding the scope of what's possible and translating that into a business need. A huge amount of development time goes in service of the Front Office — the trading desk — to ensure reliability, uptime, and functionality at scale.

That's the part that makes this career what it is: a huge piece of ETRM development is understanding the business logic itself — how all the moving parts in OpenLink fit together, and how the system connects to the rest of the trading floor. I've noticed that depth of knowledge goes a long way here. Certain developers are invaluable simply because they hold so much domain knowledge and can translate it into code.

And that's exactly what makes it so interesting to me. Trying to one-up myself every day, talking to more experienced developers, understanding the code behind a forward curve or the math behind the Greeks calculators and the pricing models — then watching that knowledge unfold as trades get booked and flow through the system I help build. It's a kind of satisfaction I didn't think I'd find working in this field.

The funny part is that this entire side of tech was something I never knew existed until I came across it by complete accident. What started as a simple contract position has turned into a mission: to become the most knowledgeable, most "cracked" developer I can be.

If you're early in your career and feeling boxed in by the same handful of paths everyone points you toward, it might be worth looking at the corners of the industry nobody's talking about. This one found me by accident — and it's turning out to be one of the best things that's happened to my career.
