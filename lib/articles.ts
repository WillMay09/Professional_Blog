import fs from "fs";

import matter from "gray-matter";
import path from "path";
import moment from "moment";

import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeHighlight from "rehype-highlight";
import { toHtml } from "hast-util-to-html";

type ArticleItem = {
  id: string;
  title: string;
  date: string;
  category: string;
};

const articlesDirectory = path.join(process.cwd(), "articles");

export const getSortedAriticles = (): ArticleItem[] => {
  const fileNames = fs.readdirSync(articlesDirectory);
  const articles = fileNames.map((fileName) => {
    //removes markdown file extension to get id
    const id = fileName.replace(/\.mdx?$/, "");
    const fullPath = path.join(articlesDirectory, fileName);
    //get file contents
    const fileContents = fs.readFileSync(fullPath, "utf-8");
    //process the file metadata section
    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      category: matterResult.data.category,
    };
  });

  return articles.sort((a, b) => {
    const format = "YYYY-MM-DD";
    const dateOne = moment(a.date, format);
    const dateTwo = moment(b.date, format);
    if (dateOne.isBefore(dateTwo)) return 1;
    else if (dateOne.isAfter(dateTwo)) return -1;
    else return 0;
  });
};


export const getArticleData = (id: string) =>{
  // Try .mdx first, then fall back to .md
  let fullPath = path.join(articlesDirectory, `${id}.mdx`);
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(articlesDirectory, `${id}.md`);
  }
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const matterResult = matter(fileContents);
  
  const processor = remark()
    .use(remarkRehype)
    .use(rehypeHighlight);
  const mdast = processor.parse(matterResult.content);
  const hast = processor.runSync(mdast);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const contentHtml = toHtml(hast as any);

  return {
    id,
    contentHtml,
    title: matterResult.data.title,
    category: matterResult.data.category,
    date: moment(matterResult.data.date).format("MMMM DD, YYYY"),
  }
}


