import Container from 'components/container';
import DateFormatter from 'components/date-formatter';
import React, { FunctionComponent } from 'react';
import { Author } from '../models';

export type BlogHeaderProps = {
  title: string;
  date: string;
  coverImageUrl?: string;
  author: Author;
};

const BlogHeader: FunctionComponent<BlogHeaderProps> = (props) => {
  const { title, date, coverImageUrl } = props;
  return (
    <div className='bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-800 pt-20 pb-12'>
      <Container size="sm">
        <h1 className='dark:text-white text-6xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none mb-2 md:mb-4 text-center md:text-left'>
          {title}
        </h1>

        <div className='text-center sm:text-left'>
          {/* <Avatar name={author.name} picture={author.picture} /> */}
          <div className='text-gray-500 text-lg font-medium italic'>
            Published on <DateFormatter dateString={date} />
          </div>
        </div>
      </Container>
      
    </div>
  );
};

export default BlogHeader;
