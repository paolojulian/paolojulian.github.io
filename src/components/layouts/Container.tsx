import React, { FunctionComponent } from 'react';

export type ContainerProps = {
  children: React.ReactNode;
};

const Container: FunctionComponent<ContainerProps> = ({ children }) => {
  return (
    <div className='mx-auto max-w-screen-xl w-full px-2 md:px-6 lg:px-12 xl:px-0'>
      {children}
    </div>
  );
};

export default Container;
