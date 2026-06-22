import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getSortedAriticles } from "@/lib/articles";

export default function BlogPage() {
  const articles = getSortedAriticles();

  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
      {/* Header */}
      <div className="mb-16 pb-12 border-b border-border-muted">
        <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-accent mb-4">
          Journal
        </p>
        <h1 className="font-cormorantGaramond text-6xl lg:text-7xl text-foreground tracking-tight mb-6">
          Writing
        </h1>
        <p className="text-foreground-muted text-lg max-w-lg leading-relaxed">
          Dispatches from the trading floor, distributed systems, and the
          personal pursuit of mastery.
        </p>
      </div>

      {/* Article list */}
      <div className="flex flex-col">
        {articles.length === 0 ? (
          <p className="text-foreground-muted py-12 text-center font-mono text-sm">
            No articles yet — check back soon.
          </p>
        ) : (
          articles.map(({ id, title, date, category }) => (
            <ArticleRow
              key={id}
              id={id}
              title={title}
              date={date}
              category={category}
            />
          ))
        )}
      </div>
    </div>
  );
}

function ArticleRow({
  id,
  title,
  date,
  category,
}: {
  id: string;
  title: string;
  date: string;
  category: string;
}) {
  return (
    <Link
      href={`/${id}`}
      className="group flex flex-col sm:flex-row sm:items-center justify-between py-8 border-b border-border-muted hover:border-border transition-colors gap-4"
    >
      <div className="flex flex-col">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs font-mono text-foreground-subtle">{date}</span>
          <span className="w-1 h-1 rounded-full bg-border" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-accent">
            {category}
          </span>
        </div>
        <h2 className="font-cormorantGaramond text-3xl lg:text-4xl text-foreground group-hover:text-accent transition-colors tracking-tight leading-tight">
          {title}
        </h2>
      </div>
      <ArrowRight className="w-5 h-5 text-foreground-subtle group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" />
    </Link>
  );
}
