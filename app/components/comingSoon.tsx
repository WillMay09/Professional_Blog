import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ComingSoonProps {
  title?: string;
  description?: string;
}

export default function ComingSoon({
  title = "Coming Soon",
  description,
}: ComingSoonProps) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-20 text-center">
      <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent mb-6">
        Under Construction
      </p>
      <h1 className="font-cormorantGaramond text-6xl lg:text-7xl text-foreground mb-6 tracking-tight">
        {title}
      </h1>
      <div className="w-12 h-px bg-border mx-auto mb-8" />
      <p className="text-foreground-muted max-w-md leading-relaxed text-base mb-10">
        {description ??
          "This section is being built. Check back soon for updates."}
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-sm font-medium hover:bg-foreground-muted transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>
    </div>
  );
}
