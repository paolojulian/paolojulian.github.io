import BlogLayout from 'features/blog/layouts';
import React, { FunctionComponent } from 'react';
import BlogPost from '../common/blog-post';
import { IProps } from 'pages/blogs/[id]';
import Stack from 'layouts/Stack';

interface BlogDetailsProps {
  data: IProps['postData'];
  content: React.ReactNode;
}

const BlogDetails: FunctionComponent<BlogDetailsProps> = ({
  data,
  content,
}) => {
  return (
    <BlogLayout>
      <Stack>
        {/* Header */}
        <Stack className='h-[300px] bg-gray-100 p-8 justify-center'>
          <h1 className='font-bold text-6xl'>{data.title}</h1>
          <h3 className='italic text-slate-500'>
            Published on {data.publish_date}
          </h3>
        </Stack>
        <div className='px-4 md:px-8 md:mb-32'>
          <BlogPost content={content} />
        </div>
        <footer className='my-12'>
          <h4 className='text-gray-600 text-base font-medium my-4 text-center'>
            Copyright © 2017-2023 Paolo Vincent Julian. All rights reserved.
          </h4>
        </footer>
      </Stack>
    </BlogLayout>
  );
};

export default BlogDetails;
