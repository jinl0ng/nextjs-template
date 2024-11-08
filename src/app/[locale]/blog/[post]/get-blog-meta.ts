import { notFound } from "next/navigation";
import type { Metadata } from "next/types";

export type PostMetadata = Metadata & {
  title: string;
  description: string;
};

export type BlogPostData = {
  post: string;
  metadata: Metadata;
};

export async function getBlogPostMetadata(post: string): Promise<BlogPostData> {
  try {
    const file = await import(`@/blog/${post}.mdx`);

    if (file?.metadata) {
      if (!file.metadata.title || !file.metadata.description) {
        throw new Error(`Missing some required metadata fields in: ${post}`);
      }

      return {
        post,
        metadata: file.metadata,
      };
    } else {
      throw new Error(`Unable to find metadata for ${post}.mdx`);
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error(error);
    }
    return notFound();
  }
}
