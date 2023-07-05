import React, { FunctionComponent } from 'react';
import { Manrope } from '@next/font/google';

const font = Manrope({ subsets: ['latin'] });

export type BlogLayoutProps = {
  children: React.ReactNode;
};

const BlogLayout: FunctionComponent<BlogLayoutProps> = (props) => {
  return <div className={font.className}>{props.children}</div>;
};

export default BlogLayout;
