import PreviewBlogDetails from 'features/blog/components/Detail/Preview';
import { GetStaticPaths, GetStaticProps } from 'next';
import { BlogPostCollection } from 'features/blog/types/contentful';
import { getBlogPostBySlug } from 'features/blog/api/posts-preview';

export default PreviewBlogDetails;

export interface IProps {
  blogPost: BlogPostCollection;
}

export const getStaticProps: GetStaticProps<IProps> = async ({ params }) => {
  if (typeof params.slug !== 'string') {
    return {
      redirect: {
        permanent: false,
        destination: '/not-found',
      },
    };
  }

  const blogPostDetailsResponse = await getBlogPostBySlug(params.slug);

  if (blogPostDetailsResponse.ok === false) {
    return {
      redirect: {
        permanent: false,
        destination: '/not-found',
      },
    };
  }

  return {
    props: {
      blogPost: blogPostDetailsResponse.data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};
