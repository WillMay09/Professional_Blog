import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col border-x border-zinc-100 max-w-[1920px] mx-auto shadow-2xl shadow-zinc-100/50">
      {/* Navigation */}
      <header className="flex items-center justify-between px-6 py-6 border-b border-zinc-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-6 h-6 bg-zinc-900 text-white flex items-center justify-center rounded-sm">
            <span className="text-xs font-medium">A</span>
          </div>
          <span className="text-lg font-medium tracking-tight">William Mayhood</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/blog"
            className="text-lg font-normal text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            Journal
          </Link>
          <Link
            href="/projects"
            className="text-lg font-normal text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="text-lg font-normal text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            About
          </Link>
        </nav>

        <button className="flex items-center gap-2 px-5 py-2 border border-zinc-200 rounded hover:border-zinc-400 transition-colors group">
          <Menu className="w-4 h-4 text-zinc-500 group-hover:text-zinc-900 transition-colors" />
          <span className="text-base font-normal uppercase tracking-wide text-zinc-600 group-hover:text-zinc-900">
            Menu
          </span>
        </button>
      </header>

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
              Navigating complex distributed systems in the modern financial world. Every line of
              code is crafted with precision, prioritizing scalability,
              performance, and the tactile relationship between user and
              interface.
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
                  842
                </span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest text-cyan-600 font-semibold mb-3">
                  Stack
                </span>
                <span className="block font-mono text-xl lg:text-2xl text-zinc-900 font-medium">
                  Rust
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

      {/* Blog Feed / Work List */}
      <section className="bg-zinc-50/30">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Section Label */}
          <div className="lg:col-span-3 p-8 lg:p-12 border-r border-b lg:border-b-0 border-zinc-100 flex items-start bg-white lg:bg-transparent">
            <h3 className="text-xl font-medium tracking-tight">
              Recent Writing
            </h3>
          </div>

          {/* Articles Grid */}
          <div className="lg:col-span-9">
            <ArticleRow
              date="OCT 24"
              title="Migrating to Server Components"
              excerpt="A deep dive into the performance implications and structural changes required for React 18."
              tag="Engineering"
              href="/blog/server-components"
            />
            <ArticleRow
              date="SEP 12"
              title="Minimalism in Digital Interfaces"
              excerpt="Why removing features is often more effective than adding them. A case study on white space."
              tag="Design"
              href="/blog/minimalism-interfaces"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-100 p-8 lg:p-12 bg-white flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-zinc-200 rounded-sm"></div>
          <span className="text-sm font-medium text-zinc-500">
            © 2024 Atlas Portfolio
          </span>
        </div>
        <div className="flex gap-8">
          <a
            href="#"
            className="text-zinc-400 hover:text-zinc-900 transition-colors"
            aria-label="X (Twitter)"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-zinc-400 hover:text-zinc-900 transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-zinc-400 hover:text-zinc-900 transition-colors"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}

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
