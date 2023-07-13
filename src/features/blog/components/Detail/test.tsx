import BlogLayout from 'features/blog/layouts';
import Row from 'layouts/Row';
import Stack from 'layouts/Stack';
import React, { FunctionComponent, useState } from 'react';
import BlogPost from '../common/blog-post';
import { IProps } from 'pages/blogs/[id]';

export type BlogDetailsProps = {
  content: React.ReactNode;
  data: {
    title?: string;
    publish_date?: string;
  };
};

const BlogDetails: FunctionComponent<BlogDetailsProps> = ({
  data,
  content,
}) => {
  const [testThis, setTestThis] = useState(true);
  return (
    <BlogLayout>
      <div className='max-w-screen-xl mx-auto'>
        <Row>
          <nav className='sticky top-0 h-screen border-r border-gray-200 p-2 hidden md:block'>
            <Stack className='justify-center space-y-2 h-full'>
              <div className='w-8 h-8 bg-gray-200 rounded-full'></div>
              <div className='w-8 h-8 bg-gray-200 rounded-full'></div>
              <div className='w-8 h-8 bg-gray-200 rounded-full'></div>
            </Stack>
          </nav>
          <div className='flex-1'>
            <Stack>
              {/* Header */}
              <Stack className='h-[300px] bg-gray-100 p-8 justify-center space-y-4'>
                <h1 className='font-bold text-6xl'>{data.title}</h1>
                <h3 className='italic text-slate-500'>
                  Published on {data.publish_date}
                </h3>
              </Stack>
              <div className='p-4 md:p-8'>
                <BlogPost content={content} />
              </div>
            </Stack>
          </div>
          <div className='w-[300px] h-screen sticky top-0 hidden xl:block'>
            <Stack>
              <div className='py-8'>
                <Row className='justify-end items-center space-x-4'>
                  <Stack className='items-end'>
                    <h3 className='font-medium'>Paolo Vincent Julian</h3>
                    <h4 className='text-sm text-gray-600'>Software Engineer</h4>
                  </Stack>
                  <div className='w-12 h-12 rounded-xl bg-gray-200'></div>
                </Row>
              </div>

              <Stack className='px-8 space-y-4'>
                <Row className='justify-between'>
                  <h3>Blogs</h3>
                  <button>Newest</button>
                </Row>

                <Stack className='space-y-8'>
                  <Row className='items-center'>
                    <div>
                      <h3 className='line-clamp-1 text-slate-800 font-bold'>
                        Black Twitter is Irreplaceable
                      </h3>
                      <p className='line-clamp-2 text-sm text-slate-600'>
                        Occaecat ipsum ipsum voluptate consequat minim Lorem do.
                        Tempor nulla officia ipsum labore irure qui dolor ad et
                        quis in. Voluptate consequat cupidatat labore non mollit
                        voluptate consequat officia nulla amet ipsum incididunt
                        consectetur esse. Dolore irure pariatur magna esse dolor
                        et sit commodo excepteur ad incididunt nulla dolore.
                        Laborum magna id voluptate amet.
                      </p>
                      <span className='text-xs text-slate-500'>
                        11-22-2022 08:00 AM 5 mins read
                      </span>
                    </div>
                  </Row>
                  <Row className='items-center'>
                    <div>
                      <h3 className='line-clamp-1 text-slate-800 font-bold'>
                        Black Twitter is Irreplaceable
                      </h3>
                      <p className='line-clamp-2 text-sm text-slate-600'>
                        Occaecat ipsum ipsum voluptate consequat minim Lorem do.
                        Tempor nulla officia ipsum labore irure qui dolor ad et
                        quis in. Voluptate consequat cupidatat labore non mollit
                        voluptate consequat officia nulla amet ipsum incididunt
                        consectetur esse. Dolore irure pariatur magna esse dolor
                        et sit commodo excepteur ad incididunt nulla dolore.
                        Laborum magna id voluptate amet.
                      </p>
                      <span className='text-xs text-slate-500'>
                        11-22-2022 08:00 AM 5 mins read
                      </span>
                    </div>
                  </Row>
                </Stack>
              </Stack>
            </Stack>
          </div>
        </Row>
      </div>
    </BlogLayout>
  );
};

export default BlogDetails;
