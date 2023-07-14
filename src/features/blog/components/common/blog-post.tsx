import React, { FunctionComponent } from 'react';
import { MDXProvider } from '@mdx-js/react';
import CodeBlock from './code-block';
import Heading from './typography/heading';
import Paragraph from './typography/paragraph';

export type BlogPostProps = {
  content: React.ReactNode;
};

const BlogPost: FunctionComponent<BlogPostProps> = ({ content }) => {
  return (
    // <div
    //   className={styles.container}
    //   dangerouslySetInnerHTML={{ __html: content }}
    // ></div>
    <MDXProvider
      components={{
        h2: ({ children }) => (
          <Heading.H2 className='mb-2 mt-4 md:mt-8'>{children}</Heading.H2>
        ),
        h3: ({ children }) => (
          <Heading.H3 className='mb-2'>{children}</Heading.H3>
        ),
        p: ({ children }) => <Paragraph className='mb-2'>{children}</Paragraph>,
        pre: ({ children }) => <>{children}</>,
        code: ({ children, className }) => (
          <CodeBlock className={className}>{children}</CodeBlock>
        ),
      }}
    >
      <div>{content}</div>
    </MDXProvider>
  );
};

export default BlogPost;
