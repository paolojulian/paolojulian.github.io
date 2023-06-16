import React, { FunctionComponent, HTMLAttributes } from 'react';

export type SectionTitleProps = {
  // No Props
} & HTMLAttributes<HTMLHeadingElement>;

const SectionTitle = React.forwardRef<HTMLHeadingElement, SectionTitleProps>(
  (props, ref) => {
    return <h1 ref={ref} className='font-bold text-2xl mb-2' {...props}></h1>;
  }
);

export default SectionTitle;
