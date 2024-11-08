import dynamic from "next/dynamic";
import { Metadata } from "next/types";

import { setRequestLocale } from "next-intl/server";

import { Locale } from "@/lib/i18n/config";

import { getBlogPostMetadata } from "./get-blog-meta";

type BlogPageProps = { params: Promise<{ post: string; locale: Locale }> };

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { post } = await params;
  const { metadata } = await getBlogPostMetadata(post);

  if (metadata) {
    return metadata;
  } else {
    throw new Error(`No metadata found for blog post: ${post}`);
  }
}

export async function generateStaticParams() {
  const blogPosts = ["first-article"]; // FIXME: Read from file system
  const blogStaticParams = blogPosts.map((post) => ({
    post,
  }));

  return blogStaticParams;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { post, locale } = await params;
  setRequestLocale(locale);
  const BlogMarkdown = dynamic(() => import(`@/blog/${post}.mdx`));
  return (
    <div className="p-4">
      <article className="prose prose-neutral dark:prose-invert lg:prose-xl mx-auto w-fit">
        <BlogMarkdown />
      </article>
    </div>
  );
}
