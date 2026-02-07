---
title: "10 Months in Commodities Trading: From CS Graduate to Production Support Engineer"
date: "2026-02-06"
excerpt: "My journey from graduating with a CS degree into production support engineering on a commodities trading floor—navigating a tough job market, learning Endur, and building expertise at the intersection of technology and finance."
---

![Trading screen image](/images/trading_floor_blog_image.jpg)

A little under 10 months ago, I took a job as a Production Support Engineer—a title that meant almost nothing to me at the time. My knowledge of financial services and energy trading was nearly zero. I had graduated from Rutgers University seven months earlier with a degree in computer science, a challenging journey that I'd come to genuinely enjoy. I found deep satisfaction in learning about different technologies, algorithms, and coding practices, then applying them to real projects—building working applications from knowledge I'd just acquired in the lecture hall.

## The Path to Getting Here

During my final semester, I maintained a steady routine: attending classes and building whatever I could afterward using open-source tools like The Odin Project and LeetCode. It quickly became clear that the difficulty of my career journey wouldn't be passing final exams, but rather finding a company willing to take a chance on a junior developer. This was mid-2024—tech layoffs were in full swing, and the looming presence of AI made the barrier to entry for junior roles feel sky-high.

Nevertheless, I focused on what I could control. I practiced building projects, joined an externship at Headstarter AI, and pursued a Google certificate in cybersecurity to broaden my IT skillset. After multiple interviews, I joined the contracting firm FDM—a huge opportunity that proved to be just the beginning. FDM provided paid training, access to resources, and most importantly, opportunities to land contract positions at major financial companies. This eventually led me to interview for a Production Support role at Bank of America with the team I'm on today.

Although my training at FDM had officially ended, the real learning had just begun.

## Welcome to the Trading Floor

The commodities trading floor operates like a flowing river of data, with massive amounts of financial information moving through different applications as the trading day progresses. Trades are booked and flow through a variety of custom, in-house applications—each with their own team of engineers and purpose in moving the wheels of the business. From trade booking to reconciliation and intra-day risk calculations, each piece serves as a gear in a continuously moving system.

The number of errors that can occur during trading hours feels infinite, and our job as production support engineers is to address these issues immediately—essentially putting out fires as they occur, then working on preventative measures to stop similar issues from happening again.

## The Two Pillars of Learning

I learned very quickly that succeeding in this role requires mastering two crucial areas:

### 1. Domain Knowledge

Understanding different types of trades (swaps, futures, options), what it means for a trade to settle, the various fields and information stored with each commodity type—this knowledge makes troubleshooting exponentially more effective.

**Key areas I'm focusing on:**
- Trade lifecycle from booking to settlement
- Different trade types and their characteristics
- Static data fields and their significance
- Settlement processes and invoicing
- End-of-day batch processing

### 2. Distributed Systems

Understanding how enterprise-level applications function under the hood. Knowing the concepts is one thing; understanding how these systems are physically implemented is seeing that domain knowledge in action.

**Technical areas I'm developing:**
- How data flows between applications
- System integration patterns
- Database architecture and SQL optimization
- Error handling and incident response
- Monitoring and observability

These two massive pillars were by far the biggest mountains I had to climb. And if I'm being honest, I loved nearly every second of it. This is what I'd been preparing for throughout my entire college career—actually utilizing my technical skillset in business-impacting scenarios. Applying my knowledge to troubleshoot real production issues was the rubber finally hitting the road.

## Finding the Intersection

On top of the technical challenges, I found myself genuinely interested in the financial markets. This wasn't entirely new—in college, I'd taken a strong interest in investing, crypto, and stocks, and even considered switching my degree to finance. Now I was working for a massive financial services enterprise on the technology side, and it felt like the perfect intersection.

## The Deep Dive into Endur

As a production support specialist, our job spans many applications and processes across the commodities trading floor—from the moment a trade is booked on an exchange and routed into our systems, all the way through to settlements and invoices. Understanding each application and the software engineers behind these systems is crucial to diagnosing and remediating issues quickly.

One critical piece of software that plays a large role on the trading floor is **ION's OpenLink Endur** energy trading platform. This third-party application serves as a key component of the trade lifecycle, and its technical depth is massive.

### What Makes Endur Challenging

Troubleshooting in Endur requires:
- **Reading JVS scripts** to understand where data originates
- **Understanding SQL schemas** and how financial data is stored across tables
- **Knowing which data points matter** for each specific issue
- **Mapping data flows** between Endur and other systems
- **Understanding business logic** embedded in the application

So far, learning Endur has been one of the most difficult and rewarding challenges. I'm fortunate to have a fantastic team that has taught me nearly everything I know, and I've had the privilege to work one-on-one with many of the developers on the commodities trading floor, gaining invaluable knowledge along the way.

## What I'm Learning Right Now

My current learning focus areas:

**Trade Lifecycle Mastery**
- Complete understanding of how trades move through systems
- Settlement mechanics and reconciliation processes
- How P&L is calculated and reported

**Intra-Day Risk Calculations**
- Real-time risk metric computation
- Position aggregation across books
- Market data integration for risk

**Data Engineering Fundamentals**
- Event streaming patterns (Kafka)
- Data pipeline architecture
- SQL optimization for large datasets
- Batch vs. streaming processing tradeoffs

**Modern Infrastructure**
- Cloud platforms (AWS)
- Containerization and orchestration
- Observability and monitoring (building on my Dynatrace experience)
- Infrastructure as code

## Looking Forward

Although I still have much to learn, I look forward to the challenge every day and continue setting new goals for myself. I want to master my understanding of the complete trade lifecycle, and I've set my sights on understanding intra-day risk calculation in depth. I'm also increasingly interested in how modern data engineering and cloud technologies can improve the reliability and performance of trading systems.

The journey from CS graduate to production support engineer in commodities trading has been steep, but it's exactly the kind of challenge I was hoping for. Every production incident is a learning opportunity. Every system interaction reveals new complexity. And every day reinforces that I'm building expertise at the intersection of technology and finance—a space I find endlessly fascinating.

## Advice for Recent Graduates

If you're a recent graduate trying to break into tech, especially in a tough market, my advice is simple: **focus relentlessly on what you can control**.

- **Build projects** that demonstrate real skills
- **Learn systems thinking**, not just coding syntax
- **Develop domain expertise** wherever you land
- **Document your learning** publicly
- **Network authentically** with people in your field
- **Be patient but persistent** with the job search

The barrier to entry might feel impossibly high, but the learning curve on the other side makes it worthwhile.

## What's Next

Over the coming months, I'll be sharing more about:
- Specific technical challenges I'm solving
- Deep dives into trading system architecture
- Data engineering patterns in financial services
- Career development in trading technology

Here's to the next 10 months—and to continuously climbing those mountains.

---

*Want to connect? Find me on [LinkedIn](#) or check out my [projects on GitHub](#).*
