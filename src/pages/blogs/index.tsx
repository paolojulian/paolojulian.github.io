import React, { FunctionComponent } from 'react';

export type BlogLayoutProps = {
  children: React.ReactNode;
};

const BlogLayout: FunctionComponent<BlogLayoutProps> = (props) => {
  return <>{props.children}</>;
};

export default BlogLayout;
