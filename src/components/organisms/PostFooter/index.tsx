import React, { FunctionComponent } from 'react';
import SectionTitle from '../../atoms/SectionTitle';
import TextArea from '../../atoms/TextArea';
import Container from '../../container';

export type PostFooterProps = {
  // No Props
};

const PostFooter: FunctionComponent<PostFooterProps> = (props) => {
  return (
    <Container>
      <div className='mt-12'>
        <TextArea
          label='Write me a comment'
          placeholder='Say something...'
          rows={8}
          openByDefault
        />
        <button
          type='submit'
          className='rounded-sm bg-gray-800 hover:bg-gray-700 px-4 py-2 mt-2'
        >
          <span className='uppercase text-white'>SEND</span>
        </button>
      </div>
    </Container>
  );
};

export default PostFooter;
