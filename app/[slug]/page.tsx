import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getArticleData } from "@/lib/articles";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const articleData = getArticleData(slug);

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-12 lg:py-20">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-foreground-subtle hover:text-accent transition-colors mb-12 group"
        >
          <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
          Back to Journal
        </Link>

        {/* Article header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono text-foreground-subtle">
              {articleData.date}
            </span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-accent">
              {articleData.category}
            </span>
          </div>

          <h1 className="font-cormorantGaramond text-5xl lg:text-6xl text-foreground tracking-tight leading-[1.05] mb-8">
            {articleData.title}
          </h1>

          <div className="w-full h-px bg-border-muted" />
        </div>

        {/* Article body */}
        <div
          className="article"
          dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
        />
      </div>
      <Footer />
    </>
  );
}
