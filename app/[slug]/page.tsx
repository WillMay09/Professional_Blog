import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

import { getArticleData } from "@/app/api/blog/route";

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const articleData = getArticleData(slug);

  return (
    <div className="flex flex-col justify-center max-w-3xl mx-auto px-6 py-12">
      <Link
        href="/blog"
        className="flex items-center gap-2 text-foreground-muted hover:text-foreground transition-colors mb-6"
      >
        <ArrowLeftIcon className="w-4 h-4" />
        <span>Back to Blog</span>
      </Link>
      <h1 className="text-4xl font-bold mb-4">{articleData.title}</h1>
      <p className="text-sm text-foreground-muted mb-8">
        {articleData.date} | {articleData.category}
      </p>
      <div
        className="article"
        dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
      />
    </div>
  );
}
