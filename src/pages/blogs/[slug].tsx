import {
  getBlogPostBySlug,
  getBlogPostSlugs,
  getLatestBlogPosts,
} from 'features/blog/api/posts';
import BlogDetails from 'features/blog/components/Detail';
import { BlogPostCollection } from 'features/blog/types/contentful';
import { GetStaticPaths, GetStaticProps } from 'next';

export default BlogDetails;
export interface IProps {
  blogPost: BlogPostCollection;
  latestBlogPosts: BlogPostCollection[];
}

export const getStaticProps: GetStaticProps<IProps> = async ({ params }) => {
  if (typeof params.slug !== 'string') {
    return {
      redirect: {
        permanent: true,
        destination: '/error',
      },
    };
  }

  const blogPostsQuery = getLatestBlogPosts();
  const blogPostDetailsQuery = getBlogPostBySlug(params.slug);

  const [blogPostsResponse, blogPostDetailsResponse] = await Promise.all([
    blogPostsQuery,
    blogPostDetailsQuery,
  ]);

  if (blogPostDetailsResponse.ok === false) {
    return {
      redirect: {
        permanent: true,
        destination: '/not-found',
      },
    };
  }

  let blogPosts = [];
  if (blogPostsResponse.data.length > 0) {
    blogPosts = blogPostsResponse.data;
  }

  return {
    props: {
      blogPost: blogPostDetailsResponse.data,
      latestBlogPosts: blogPosts,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await getBlogPostSlugs();
  if (!response.ok) {
    return {
      paths: [],
      fallback: false,
    };
  }

  const paths = response.data.map((blogPost) => ({
    params: {
      slug: blogPost.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
