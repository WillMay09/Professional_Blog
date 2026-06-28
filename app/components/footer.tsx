"use client";

import Link from "next/link";
import { sendEmailHook } from "../hooks/sendEmailHook";

const NAV_LINKS = [
  { href: "/blog", label: "Journal" },
  { href: "/portfolio", label: "Projects" },
  { href: "/about", label: "About" },
];

const CONNECT_LINKS = [
  {
    href: "https://www.linkedin.com/in/william-mayhood-71932a238/",
    label: "LinkedIn",
    external: true,
  },
  {
    href: "https://github.com/WillMay09",
    label: "GitHub",
    external: true,
  },
  {
    href: "mailto:mayhoodwilliam@gmail.com",
    label: "Email",
    external: false,
  },
];

export default function Footer() {
  const { email, isLoading, sendEmail, setEmail } = sendEmailHook();

  return (
    <footer className="bg-dark text-foreground-inverse">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-dark-border">
          {/* Brand + newsletter */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-foreground-inverse text-dark flex items-center justify-center font-mono text-[10px] font-bold shrink-0">
                WM
              </div>
              <span className="text-sm font-semibold text-foreground-inverse">
                William Mayhood
              </span>
            </div>
            <p className="text-sm text-foreground-inverse-muted leading-relaxed mb-6 max-w-xs">
              Weekly dispatches on trading technology, distributed systems, and
              the relentless pursuit of mastery.
            </p>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground-inverse-muted mb-3">
              Subscribe
            </p>
            <form onSubmit={sendEmail} className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading === "loading"}
                className="flex-1 bg-dark-surface border border-dark-border text-foreground-inverse placeholder:text-foreground-inverse-muted/30 px-3 py-2.5 text-sm font-mono focus:outline-none focus:border-accent transition-colors"
              />
              <button
                type="submit"
                disabled={isLoading === "loading"}
                className="px-5 py-2.5 bg-accent hover:bg-accent-hover text-white text-sm font-medium transition-colors disabled:opacity-50 cursor-pointer whitespace-nowrap"
              >
                {isLoading === "loading" ? "..." : "Join"}
              </button>
            </form>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground-inverse-muted mb-5">
              Navigate
            </p>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-foreground-inverse-muted hover:text-foreground-inverse transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground-inverse-muted mb-5">
              Connect
            </p>
            <ul className="flex flex-col gap-3">
              {CONNECT_LINKS.map(({ href, label, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="text-sm text-foreground-inverse-muted hover:text-foreground-inverse transition-colors"
                  >
                    {label} →
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2 mt-1">
                <span className="text-foreground-inverse-muted/40 text-xs">
                  📍
                </span>
                <span className="text-sm text-foreground-inverse-muted">
                  Houston, TX
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[10px] font-mono text-foreground-inverse-muted/50">
            © 2026 William Mayhood. All rights reserved.
          </p>
          <p className="text-[10px] font-mono text-foreground-inverse-muted/30 tracking-widest uppercase">
            ETRM · Production Support · Commodities Trading
          </p>
        </div>
      </div>
    </footer>
  );
}
