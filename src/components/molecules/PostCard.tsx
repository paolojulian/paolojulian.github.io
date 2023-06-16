import { useRouter } from 'next/router';
import React, { FunctionComponent, useMemo } from 'react';
import { Post } from '../../lib/models';
import SectionTitle from '../atoms/SectionTitle';
import Subtitle from '../atoms/Subtitle';
import Container from '../container';

export type PostCardProps = {
  post: Post;
  href?: string;
};

const PostCard: FunctionComponent<PostCardProps> = ({ post, href = '' }) => {
  const router = useRouter();
  const handleClick = () => {
    if (href) {
      router.push(href);
    }
  };
  const { title, date, id, readingTime, excerpt } = post;

  const truncatedExcerpt = useMemo(() => {
    return excerpt.length > 125 ? `${excerpt.substring(0, 125)}...` : excerpt;
  }, [excerpt]);

  return (
    <article
      className='m-2 md:m-4 cursor-pointer overflow-hidden transition hover:bg-gray-50 active:bg-gray-100'
      onClick={handleClick}
    >
      <Container>
        <div className='flex flex-col-reverse md:flex-row md:space-x-4 items-center'>
          <div className='flex-1'>
            <SectionTitle>{title}</SectionTitle>
            <Subtitle>{truncatedExcerpt}</Subtitle>
            <div className='flex space-x-2 mt-2 text-gray-400 text-sm font-medium'>
              <div>{date}</div>
              <div className="after:content-['\2219']"></div>
              <div>{readingTime} read</div>
            </div>
          </div>
          <div className='bg-gray-600 rounded-xl w-full h-52 md:w-52 md:h-52 mb-4 md:mb-0 '></div>
        </div>
      </Container>
    </article>
  );
};

export default PostCard;
