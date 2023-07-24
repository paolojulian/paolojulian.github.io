import React, { FunctionComponent } from 'react';
import { Manrope } from '@next/font/google';
import Row from 'layouts/Row';
import Stack from 'layouts/Stack';
import IconButton from 'components/Buttons/IconButton';
import HomeIcon from '../components/icons/home-icon';
import BloggerIcon from '../components/icons/blogger-icon';
import AppsIcon from '../components/icons/apps-icon';
import NavIconButton from '../components/common/nav-icon-btn';
import { IProps } from 'pages/blogs/[slug]';
import AppTime from 'components/UI/AppTime';
import classNames from 'classnames';
import Link from 'next/link';

const font = Manrope({ subsets: ['latin'] });

export type BlogLayoutProps = {
  children: React.ReactNode;
  latestBlogPosts: IProps['latestBlogPosts'];
};

const BlogLayout: FunctionComponent<BlogLayoutProps> = ({
  children,
  latestBlogPosts,
}) => {
  return (
    <div className={classNames('bg-[#ece8e1]-back', font.className)}>
      <div className='max-w-screen-xl mx-auto'>
        <Row>
          <nav className='sticky top-0 h-screen border-r border-gray-200 p-2 hidden md:block'>
            <Stack className='justify-center space-y-2 h-full'>
              <NavIconButton name='Home'>
                <HomeIcon className='text-gray-800' />
              </NavIconButton>
              <NavIconButton name='Blogs'>
                <BloggerIcon className='text-gray-800' />
              </NavIconButton>
              <NavIconButton name='Components'>
                <AppsIcon className='text-gray-600' />
              </NavIconButton>
            </Stack>
          </nav>
          <div className='flex-1'>{children}</div>

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

              <Stack className='space-y-4'>
                <Row className='justify-between px-8'>
                  <h3 className='text-slate-600'>blogs</h3>
                </Row>

                <Stack className='space-y-2'>
                  {latestBlogPosts.map((blogPost) => (
                    <Link
                      key={blogPost.slug}
                      href={`/blogs/${blogPost.slug}`}
                      className='md:hover:bg-slate-100 md:active:bg-slate-200 transition-colors px-8 py-4'
                    >
                      <Row className='items-center'>
                        <div>
                          <h3 className='line-clamp-1 text-gray-800 font-bold'>
                            {blogPost.title}
                          </h3>
                          <p className='line-clamp-2 text-sm text-gray-600'>
                            {blogPost.description}
                          </p>
                          <span className='text-xs text-slate-500'>
                            <AppTime dateTime={blogPost.sys.publishedAt} />
                          </span>
                        </div>
                      </Row>
                    </Link>
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default BlogLayout;
