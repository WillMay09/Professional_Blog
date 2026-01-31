"use client";

import Image from "next/image";
import Link from "next/link";
import {sendEmailHook} from "../hooks/sendEmailHook";

export function HeroPage() {

  const {email, isLoading, sendEmail, setEmail} = sendEmailHook();
  return (
    <>
      {/* Hero Section */}
      <main className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-89px)] border-b border-zinc-100">
        {/* Left Column: Content */}
        <section className="flex flex-col border-r border-zinc-100 relative bg-white">
          {/* Top Tabs */}
          {/* <div className="grid grid-cols-2 border-b border-zinc-100 w-full">
            <button className="py-6 px-8 text-left text-sm font-medium text-zinc-900 bg-zinc-50/50 border-r border-zinc-100 hover:bg-white transition-colors relative">
              Engineering
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-zinc-900"></div>
            </button>
            <button className="py-6 px-8 text-left text-sm font-normal text-zinc-400 hover:text-zinc-900 hover:bg-zinc-50/30 transition-colors">
              Visual Design
            </button>
          </div> */}

          {/* Main Content Area */}
          <div className="flex-grow flex flex-col justify-center px-10 py-16 lg:px-20 lg:py-20">
            <h1 className="text-7xl lg:text-8xl font-semibold tracking-tighter text-zinc-900 mb-8 leading-[0.9]">
              William Mayhood
            </h1>

            <div className="space-y-1 mb-8">
              <h2 className="text-xl font-medium text-zinc-900 tracking-tight">
                Production Support/Endur Developer
              </h2>
              <p className="text-xl font-normal text-zinc-400 tracking-tight">
                Commodities Trading
              </p>
            </div>

            <p className="text-lg leading-relaxed text-zinc-500 max-w-md font-light mb-16">
              Navigating complex distributed systems in the modern financial
              world. Every line of code is crafted with precision, prioritizing
              scalability, performance, and the tactile relationship between
              user and interface.
            </p>

            {/* Divider */}
            <div className="w-full h-px bg-zinc-100 mb-10"></div>

            {/* Bottom Grid Details */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-cyan-600 font-semibold mb-3">
                  Commits
                </span>
                <span className="block font-mono text-xl lg:text-2xl text-zinc-900 font-medium">
                  342
                </span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-cyan-600 font-semibold mb-3">
                  Stack
                </span>
                <span className="block font-mono text-xl lg:text-2xl text-zinc-900 font-medium">
                  JVS
                </span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-cyan-600 font-semibold mb-3">
                  Availability
                </span>
                <span className="block font-mono text-xl lg:text-2xl text-zinc-900 font-medium">
                  1/4
                </span>
              </div>
            </div>

            <div className="flex flex-col mt-12 gap-5">
              <h1>Newsletter Updates</h1>
              <form
                className="flex flex-col sm:flex-row gap-4 mb-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  sendEmail(e);
                }}
              >
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-3 bg-card-dark/50 border border-dark text-primary-dark placeholder:text-secondary-dark h-12 backdrop-blur-sm rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-accent))] focus:border-accent transition-all"
                />

                <button
                  type="submit"
                  className="flex-1 bg-background text-foreground px-8 h-12 rounded-lg border border-accent font-medium glow-accent hover:scale-[1.02] transition-transform disabled:opacity-50"
                  disabled={isLoading === "loading"}
                >
                  {isLoading === "loading" ? "Submitting..." : "Subscribe"}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Right Column: Image */}
        <section className="relative h-[50vh] lg:h-auto overflow-hidden bg-zinc-100 group">
          <Image
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop"
            alt="Coding Environment"
            fill
            className="object-cover grayscale transition-transform duration-1000 ease-out group-hover:scale-105"
            priority
          />

          {/* Scroll Indicator */}
          <div className="absolute right-0 top-1/4 h-32 w-1 bg-cyan-500 hidden lg:block"></div>
        </section>
      </main>
    </>
  );

  function ArticleRow({
    date,
    title,
    excerpt,
    tag,
    href,
  }: {
    date: string;
    title: string;
    excerpt: string;
    tag: string;
    href: string;
  }) {
    return (
      <Link
        href={href}
        className="group block border-b border-zinc-100 hover:bg-white transition-colors"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 p-8 lg:p-10 items-center gap-6">
          <div className="md:col-span-2 text-base text-zinc-400 font-normal font-mono">
            {date}
          </div>
          <div className="md:col-span-7">
            <h4 className="text-2xl font-medium tracking-tight text-zinc-900 group-hover:text-cyan-700 transition-colors mb-2">
              {title}
            </h4>
            <p className="text-lg text-zinc-500 font-light line-clamp-1">
              {excerpt}
            </p>
          </div>
          <div className="md:col-span-3 flex justify-end">
            <span className="px-3 py-1 rounded-full border border-zinc-200 text-xs font-medium uppercase tracking-wide text-zinc-500 group-hover:border-zinc-900 group-hover:text-zinc-900 transition-all">
              {tag}
            </span>
          </div>
        </div>
      </Link>
    );
  }
}
