import React from 'react';

export type SectionCodeProps = {
  // No Props
};

const SectionCode = (props) => {
  return (
    <pre>
      <code className='language-javascript' {...props}></code>
    </pre>
  );
};

export default SectionCode;
