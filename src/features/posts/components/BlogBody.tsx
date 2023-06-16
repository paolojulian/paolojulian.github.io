import Container from 'components/container';
import markdownStyles from 'components/markdown-styles.module.css';
import React, { FunctionComponent } from 'react';

export type BlogBodyProps = {
  content: string;
};

const BlogBody: FunctionComponent<BlogBodyProps> = ({ content }) => {
  return (
    <Container size='sm'>
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Container>
  );
};

export default BlogBody;
