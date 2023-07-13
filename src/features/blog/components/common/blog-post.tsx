import React, { FunctionComponent } from 'react';
import { MDXProvider } from '@mdx-js/react';
import CodeBlock from './code-block';

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
          <h2 className='text-gray-800 font-bold text-xl mb-2 mt-4 md:mt-8'>
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className='text-gray-800 font-semibold mb-2'>{children}</h3>
        ),
        p: ({ children }) => <p className='text-gray-700 mb-2'>{children}</p>,
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
