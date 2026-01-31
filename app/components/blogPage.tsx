import Link from "next/link";
import { getSortedAriticles } from "@/app/api/blog/route";

export default function BlogPage() {
  console.log(getSortedAriticles());
  return (
    <>
      <div className="flex flex-col justify-center max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6 mx-auto">Blog Page</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getSortedAriticles().map(({ id, title, date, category }) =>
            BlogCard(id, title, date, category),
          )}
        </div>
      </div>
    </>
  );
}

function BlogCard(id: string, title: string, date: string, category: string) {
  return (
    <Link key={id} href={`/${id}`}>
      <div className="flex flex-col border border-border-muted rounded-lg p-6 mb-6 hover:bg-accent-hover transition-colors cursor-pointer">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-sm text-foreground-muted mb-4">
          {date} | {category}
        </p>
        <p className="text-foreground-subtle">
          This is a brief summary of the blog post. Click to read more...
        </p>
      </div>
    </Link>
  );
}
