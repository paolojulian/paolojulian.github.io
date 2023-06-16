import MainLayout from 'layouts/MainLayout';
import Row from 'layouts/Row';
import React, { FunctionComponent } from 'react';
import Blog from '../components/Blog';
import BlogListMenu from '../components/BlogListMenu';
import { PostType } from '../models';
import PostProvider from '../providers';

export type PostDetailsProps = {
  post: PostType;
  isLoading?: boolean;
};

const PostDetails: FunctionComponent<PostDetailsProps> = (props) => {
  return (
    <MainLayout>
      <PostProvider selectedPost={props.post}>
        <Row className='w-full h-full'>
          <Blog />
          <BlogListMenu />
        </Row>
      </PostProvider>
    </MainLayout>
  );
};

export default PostDetails;
