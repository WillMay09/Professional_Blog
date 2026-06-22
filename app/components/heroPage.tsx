"use client";

import Image from "next/image";
import { sendEmailHook } from "../hooks/sendEmailHook";

export function HeroPage() {
  const { email, isLoading, sendEmail, setEmail } = sendEmailHook();

  return (
    <div>
      {/* ─── Dark hero ─── */}
      <section className="min-h-[88vh] bg-dark flex flex-col lg:grid lg:grid-cols-[3fr_2fr]">
        {/* Left: text */}
        <div className="flex flex-col justify-between px-8 lg:px-16 pt-16 pb-12">
          {/* Top label */}
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent">
              Production Support · ETRM Developer
            </span>
            <span className="text-[10px] font-mono text-foreground-inverse-muted hidden sm:block">
              Houston, TX · 2026
            </span>
          </div>

          {/* Headline */}
          <div className="py-12 lg:py-16">
            <h1 className="font-cormorantGaramond font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.93] tracking-tight text-foreground-inverse">
              Engineering
              <br />
              <span className="italic font-normal text-foreground-inverse/75">
                at the edge
              </span>
              <br />
              of finance &amp;
              <br />
              technology
              <span className="text-accent">.</span>
            </h1>

            <p className="mt-8 text-foreground-inverse-muted text-base lg:text-lg leading-relaxed max-w-md font-light">
              Production support engineer navigating the complexity of
              commodities trading systems — and the personal discipline required
              to grow within it.
            </p>
          </div>

          {/* Newsletter */}
          <div className="border-t border-dark-border pt-8">
            <div className="mb-5">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground-inverse-muted mb-1">
                Weekly Dispatch
              </p>
              <p className="text-sm text-foreground-inverse-muted/70">
                Trading technology, systems thinking &amp; the pursuit of
                mastery.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendEmail(e);
              }}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 max-w-xs bg-dark-surface border border-dark-border text-foreground-inverse placeholder:text-foreground-inverse-muted/30 px-4 py-3 text-sm font-mono focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                disabled={isLoading === "loading"}
                className="px-6 py-3 bg-accent hover:bg-accent-hover text-white text-sm font-medium transition-colors disabled:opacity-50 whitespace-nowrap cursor-pointer"
              >
                {isLoading === "loading" ? "..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        {/* Right: image */}
        <div className="hidden lg:block relative">
          <Image
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop"
            alt="Coding environment"
            fill
            className="object-cover grayscale opacity-50"
            priority
          />
          {/* Gradient blends image into the dark left panel */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #0f1117 0%, rgba(15,17,23,0.45) 40%, transparent 100%)",
            }}
          />
        </div>
      </section>

      {/* ─── Three pillars ─── */}
      <section className="bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            <Pillar
              index="01"
              label="ETRM &amp; Trading Systems"
              description="Endur, trade lifecycles, settlement flows, and the enterprise architecture that powers commodities markets."
            />
            <Pillar
              index="02"
              label="Distributed Systems"
              description="Production incident response, system integration patterns, and building intuition for complex failure modes at scale."
            />
            <Pillar
              index="03"
              label="The Discipline to Grow"
              description="The habits, mental frameworks, and relentless consistency required to master a demanding technical domain."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function Pillar({
  index,
  label,
  description,
}: {
  index: string;
  label: string;
  description: string;
}) {
  return (
    <div className="py-10 px-8 first:pl-0 last:pr-0">
      <p className="text-[10px] font-mono text-foreground-subtle mb-4">
        {index}
      </p>
      <h3 className="font-cormorantGaramond text-2xl text-foreground mb-3 tracking-tight">
        <span dangerouslySetInnerHTML={{ __html: label }} />
      </h3>
      <p className="text-sm text-foreground-muted leading-relaxed">
        {description}
      </p>
    </div>
  );
}
