"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";

const NAV_LINKS = [
  { href: "/blog", label: "Journal" },
  { href: "/portfolio", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between px-6 lg:px-10 py-4 border-b border-border bg-background-translucent backdrop-blur-sm sticky top-0 z-50">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-foreground text-background flex items-center justify-center font-mono text-[10px] font-bold tracking-tighter flex-shrink-0">
            WM
          </div>
          <div className="hidden sm:flex flex-col leading-none gap-0.5">
            <span className="text-sm font-semibold tracking-tight text-foreground">
              William Mayhood
            </span>
            <span className="text-[10px] font-mono text-foreground-subtle tracking-widest uppercase">
              ETRM · Production Support
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-foreground-muted hover:text-foreground transition-colors tracking-wide"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Menu toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center gap-2 px-4 py-2 border border-border hover:border-border-hover transition-colors group rounded-sm"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-4 h-4 text-foreground-muted group-hover:text-foreground transition-colors" />
          ) : (
            <Menu className="w-4 h-4 text-foreground-muted group-hover:text-foreground transition-colors" />
          )}
          <span className="text-[10px] font-mono uppercase tracking-widest text-foreground-subtle group-hover:text-foreground transition-colors">
            Menu
          </span>
        </button>
      </header>

      {/* Slide-out panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-background shadow-2xl z-[60] transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center px-6 py-4 border-b border-border">
            <span className="text-[10px] font-mono uppercase tracking-widest text-foreground-subtle">
              Navigation
            </span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-surface rounded-full transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-foreground-muted" />
            </button>
          </div>

          <nav className="flex-1 px-6 py-8 overflow-y-auto">
            <div className="flex flex-col">
              {NAV_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-cormorantGaramond text-4xl text-foreground-muted hover:text-foreground transition-colors py-4 border-b border-border-muted"
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-border-muted">
              <p className="text-[10px] font-mono uppercase tracking-widest text-foreground-subtle mb-5">
                Connect
              </p>
              <div className="flex flex-col gap-4">
                {[
                  {
                    href: "https://linkedin.com/in/william-mayhood",
                    label: "LinkedIn",
                    external: true,
                  },
                  {
                    href: "https://github.com/wmayhood",
                    label: "GitHub",
                    external: true,
                  },
                  {
                    href: "mailto:mayhoodwilliam@gmail.com",
                    label: "Email",
                    external: false,
                  },
                ].map(({ href, label, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-between text-sm text-foreground-muted hover:text-foreground transition-colors group"
                  >
                    {label}
                    <span className="text-foreground-subtle group-hover:translate-x-1 transition-transform inline-block">
                      →
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border-muted">
              <p className="text-[10px] font-mono uppercase tracking-widest text-foreground-subtle mb-2">
                Newsletter
              </p>
              <p className="text-sm text-foreground-muted leading-relaxed mb-5">
                Weekly dispatches on trading technology, systems thinking, and
                the pursuit of mastery.
              </p>
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background text-sm font-medium hover:bg-foreground-muted transition-colors"
              >
                Subscribe →
              </Link>
            </div>
          </nav>

          <div className="px-6 py-4 border-t border-border-muted">
            <p className="text-[10px] font-mono text-foreground-subtle">
              © 2026 William Mayhood
            </p>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
