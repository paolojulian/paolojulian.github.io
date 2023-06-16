import Head from 'next/head';
import Prism from 'prismjs';
import React, { FunctionComponent, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import PostType from '../../../interfaces/post';
import { CMS_NAME } from '../../../lib/constants';
import SectionTitle from '../../atoms/SectionTitle';
import Container from '../../container';

export type PostDetailsProps = {
  post: PostType;
};

const PostDetails: FunctionComponent<PostDetailsProps> = ({ post }) => {
  useEffect(() => {
    if (typeof window !== undefined) {
      Prism.highlightAll();
    }
  }, []);

  return (
    <article className='mb-32'>
      <Head>
        <title>
          {post.title} | Paolo Vincent Julian
        </title>
        <meta property='og:image' content={post.ogImage.url} />
      </Head>

      {/* Header */}
      <div className='bg-gray-50 border-b border-gray-200 py-28'>
        <Container>
          <div className='flex flex-col space-y-1'>
            <h1 className='text-gray-800 font-bold text-4xl w-3/4'>
              {post.title}
            </h1>
            <h2 className='text-gray-400 text-xl'>
              <time dateTime={post.date} className='text-lg font-medium'>
                {post.date}
              </time>
            </h2>
          </div>
        </Container>
      </div>

      {/* Body */}
      <Container>
        <div className='flex flex-col space-y-8 my-5 text-lg text-gray-700'>
          <div>
            <SectionTitle>What is Lorem Ipsum?</SectionTitle>
            <p className='indent-4 md:indent-8'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
          </div>
          <div>
            <SectionTitle>Why do we use it?</SectionTitle>
            <p className='indent-4 md:indent-8'>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </div>
          <div>
            <pre>
              <code className='language-javascript'>
                const test = 'New'; const test2 = 'Old';
              </code>
            </pre>
          </div>
          {/* <ReactMarkdown children={LoremIpsumMd}></ReactMarkdown> */}
        </div>
      </Container>
    </article>
  );
};

export default PostDetails;
