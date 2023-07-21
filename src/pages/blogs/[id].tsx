import { getBlogPostBySlug } from 'features/blog/api/posts';
import BlogDetails from 'features/blog/components/Detail';
import { getAllPostIds } from 'features/blog/lib/posts';
import { BlogPostCollection } from 'features/blog/types/contentful';
import { GetStaticPaths, GetStaticProps } from 'next';

export default BlogDetails;
export interface IProps {
  blogPost: BlogPostCollection;
}

export const getStaticProps: GetStaticProps<IProps> = async ({ params }) => {
  if (typeof params.id !== 'string') {
    return {
      redirect: {
        permanent: true,
        destination: '/error',
      },
    };
  }

  const blogPost = await getBlogPostBySlug('lorem-ipsum');
  let data = blogPost.data;
  if (blogPost.ok === false) {
    data = null;
  }

  return {
    props: {
      blogPost: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};
