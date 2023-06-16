import dayjs from 'dayjs';
import Row from 'layouts/Row';
import Stack from 'layouts/Stack';
import React, { FunctionComponent } from 'react';

export type BlogItemProps = {
  title: string;
  description: string;
  createdAt: Date;
  readTime: string;
};

const BlogItem: FunctionComponent<BlogItemProps> = ({
  title,
  description,
  createdAt,
  readTime,
}) => {
  return (
    <Row>
      <Stack className='gap-3'>
        <Stack className='gap-1'>
          <h1 className='text-lg font-bold truncate'>{title}</h1>
          <p className='text-base text-slate-600 text-medium line-clamp-4 sm:line-clamp-3 md:line-clamp-2'>
            {description}
          </p>
        </Stack>
        <Row className='gap-3'>
          <span className='italic text-sm font-medium text-slate-400'>
            {dayjs(createdAt.toDateString()).format('DD-MMM-YYYY hh:mma')}
          </span>
          <span className='italic text-sm font-medium text-slate-400'>
            {readTime} Read
          </span>
        </Row>
      </Stack>
      <div>

      </div>
    </Row>
  );
};

export default BlogItem;
