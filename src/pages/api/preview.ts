import { getBlogPostBySlug } from "features/blog/api/posts-preview";
import { NextApiHandler } from "next"

const handler: NextApiHandler = async (req, res) => {
  if (req.query.secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !req.query.secret) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  if (typeof req.query.slug !== 'string') {
    return res.status(400).json({ message: 'No slug' })
  }

  const blogPost = await getBlogPostBySlug(req.query.slug);

  if (!blogPost.ok) {
    return res.status(404).json({ message: 'Slug not found' })
  }

  res.setPreviewData({});
  res.redirect(`/blogs/preview/${blogPost.data.slug}`);
}

export default handler