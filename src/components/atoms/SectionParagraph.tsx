import React, { FunctionComponent } from 'react';

export type SectionParagraphProps = {
  // No Props
};

const SectionParagraph: FunctionComponent<SectionParagraphProps> = (props) => {
  return <p className='mb-4 md:mb-8' {...props}></p>;
};

export default SectionParagraph;
