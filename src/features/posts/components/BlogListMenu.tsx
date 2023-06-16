import Container from 'components/container';
import CaretDown from 'components/Icons/CaretDown';
import ProfileWithPicture from 'components/molecules/ProfileWithPicture';
import dayjs from 'dayjs';
import Row from 'layouts/Row';
import Stack from 'layouts/Stack';
import React, { FunctionComponent } from 'react';
import BlogItem from './BlogItem';

export type BlogListMenuProps = {
  // No Props
};

const BlogListMenu: FunctionComponent<BlogListMenuProps> = (props) => {
  return (
    <Stack className='bg-red-100 h-full w-96 py-6'>
      <Container>
        <Stack className='gap-12'>
          <ProfileWithPicture
            name='Paolo Vincent Julian'
            position='Software Engineer'
            imageUrl=''
          />
          <Row className='flex-1 justify-between items-center'>
            <h3 className='text-red-500 font-semibold tracking-wide text-2xl'>
              Blogs
            </h3>
            <button>
              <Row className='gap-2 items-center'>
                <span className='text-slate-600 font-medium'>Newest</span>
                <span>
                  <CaretDown />
                </span>
              </Row>
            </button>
          </Row>
          <Stack>
            <BlogItem
              title='Black Twitter is Irreplaceable'
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              createdAt={new Date}
              readTime='5 mins'
            />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default BlogListMenu;
