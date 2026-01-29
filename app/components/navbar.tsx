"use client"

import Link from "next/link"
import { Menu } from "lucide-react"

export default function Navbar() {
    return (
      <header className="flex items-center justify-between px-6 py-6 border-b border-border-muted bg-background-translucent backdrop-blur-sm sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-6 h-6 bg-accent text-accent-foreground flex items-center justify-center rounded-sm">
            <span className="text-xs font-medium">A</span>
          </div>
          <span className="text-lg font-medium tracking-tight text-foreground">William Mayhood</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/blog"
            className="text-lg font-normal text-foreground-muted hover:text-foreground transition-colors"
          >
            Journal
          </Link>
          <Link
            href="/projects"
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

        <button className="flex items-center gap-2 px-5 py-2 border border-border rounded hover:border-border-hover transition-colors group">
          <Menu className="w-4 h-4 text-foreground-muted group-hover:text-foreground transition-colors" />
          <span className="text-base font-normal uppercase tracking-wide text-foreground-subtle group-hover:text-foreground">
            Menu
          </span>
        </button>
      </header>
    )
}