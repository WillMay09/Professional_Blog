"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  //2 states for menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between px-6 py-6 border-b border-border-muted bg-background-translucent backdrop-blur-sm sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-6 h-6 bg-accent text-accent-foreground flex items-center justify-center rounded-sm">
            <span className="text-xs font-medium">A</span>
          </div>
          <span className="text-lg font-medium tracking-tight text-foreground">
            William Mayhood
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/blog"
            className="text-lg font-normal text-foreground-muted hover:text-foreground transition-colors"
          >
            Journal
          </Link>
          <Link
            href="/portfolio"
            className="text-lg font-normal text-foreground-muted hover:text-foreground transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="text-lg font-normal text-foreground-muted hover:text-foreground transition-colors"
          >
            About
          </Link>
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center gap-2 px-5 py-2 border border-border rounded hover:border-border-hover transition-colors group"
        >
          {isMenuOpen ? (
            <X className="w-4 h-4 text-foreground-muted group-hover:text-foreground transition-colors" />
          ) : (
            <Menu className="w-4 h-4 text-foreground-muted group-hover:text-foreground transition-colors" />
          )}
          <span className="text-base font-normal uppercase tracking-wide text-foreground-subtle group-hover:text-foreground">
            Menu
          </span>
        </button>
      </header>

      {/* Slide-out menu panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-[60] transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu header */}
          <div className="flex justify-between items-center px-6 py-6 border-b border-gray-200">
            <span className="text-lg font-medium tracking-tight">Menu</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Navigation links */}
          <nav className="flex-1 px-6 py-8 overflow-y-auto">
            <div className="flex flex-col gap-1">
              <Link
                href="/blog"
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-normal text-gray-700 hover:text-black transition-colors py-3 border-b border-gray-100"
              >
                Journal
              </Link>
              <Link
                href="/portfolio"
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-normal text-gray-700 hover:text-black transition-colors py-3 border-b border-gray-100"
              >
                Projects
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl font-normal text-gray-700 hover:text-black transition-colors py-3 border-b border-gray-100"
              >
                About
              </Link>
            </div>

            {/* Secondary links */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">
                Connect
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base text-gray-600 hover:text-black transition-colors"
                >
                  Contact
                </Link>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-600 hover:text-black transition-colors"
                >
                  LinkedIn →
                </a>
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-600 hover:text-black transition-colors"
                >
                  GitHub →
                </a>
                <a
                  href="mailto:your@email.com"
                  className="text-base text-gray-600 hover:text-black transition-colors"
                >
                  Email →
                </a>
              </div>
            </div>

            {/* Newsletter signup in menu */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">
                Newsletter
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Get notified when I publish new articles about trading and
                automation.
              </p>
              <Link
                href="/newsletter"
                onClick={() => setIsMenuOpen(false)}
                className="inline-block px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </Link>
            </div>
          </nav>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-gray-200 text-xs text-gray-500">
            © 2026 William Mayhood
          </div>
        </div>
      </div>

      {/* Backdrop overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
