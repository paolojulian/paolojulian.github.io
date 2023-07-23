export interface BlogPostCollection {
  title: string;
  description: string;
  author: string;
  slug: string;
  content: string;
  sys: {
    publishedAt: string;
  }
}