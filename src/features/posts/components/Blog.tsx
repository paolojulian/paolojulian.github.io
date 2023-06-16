import Container from 'components/container';
import { CMS_NAME } from 'lib/constants';
import Head from 'next/head';
import React, { FunctionComponent, useMemo } from 'react';
import { usePost } from '../providers';
import BlogBody from './BlogBody';
import BlogHeader from './BlogHeader';

export type BlogProps = {
  // No Props
};

const Blog: FunctionComponent<BlogProps> = (props) => {
  const { selectedPost: post } = usePost();
  console.log(post);

  return (
    <article className='mb-32 flex-1 overflow-y-auto h-full'>
      <Head>
        <title>
          {post.title} | {CMS_NAME}
        </title>
        <meta property='og:image' content={post.ogImage.url} />
      </Head>
      <BlogHeader
        title={post.title}
        coverImageUrl={post.coverImage}
        date={post.date}
        author={post.author}
      />

      <BlogBody content={post.content} />
    </article>
  );
};

export default Blog;
