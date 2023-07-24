import BlogLayout from 'features/blog/layouts';
import React, { FunctionComponent } from 'react';
import BlogPost from '../common/blog-post';
import { IProps } from 'pages/blogs/[slug]';
import Stack from 'layouts/Stack';
import Head from 'next/head';
import dayjs from 'dayjs';
import AppTime from 'components/UI/AppTime';

const BlogDetails: FunctionComponent<IProps> = ({
  blogPost,
  latestBlogPosts,
}) => {
  const currentYear = dayjs().year();

  return (
    <>
      <Head>
        {/* <title>{data.title}</title> */}
        <title>Test</title>
      </Head>
      <BlogLayout latestBlogPosts={latestBlogPosts}>
        <Stack>
          {/* Header */}
          <Stack className='h-[300px] bg-gray-100 p-8 justify-center'>
            <h1 className='font-bold text-6xl'>{blogPost.title}</h1>
            <p className='italic text-slate-500'>
              Published on <AppTime dateTime={blogPost.sys.publishedAt} />
            </p>
          </Stack>
          <div className='px-4 md:px-8 md:mb-32'>
            <BlogPost content={blogPost.content} />
          </div>
          <footer className='mt-12 mb-4 px-4 md:px-8'>
            <h4 className='text-gray-600 text-base font-medium my-4 text-center'>
              Copyright © 2017-{currentYear} Paolo Vincent Julian. All rights
              reserved.
            </h4>
          </footer>
        </Stack>
      </BlogLayout>
    </>
  );
};

export default BlogDetails;
