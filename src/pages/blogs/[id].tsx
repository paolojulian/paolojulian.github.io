import BlogDetails from 'features/blog/components/Detail';
import { getAllPostIds, getPostData } from 'features/blog/lib/posts';
import { GetStaticPaths, GetStaticProps } from 'next';

export default BlogDetails;

export interface IProps {
  postData: {
    id: string;
    contentHTML: string;
    title?: string;
    author?: string;
    publish_date?: string;
  };
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

  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
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
