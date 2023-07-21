import React, { FunctionComponent } from 'react';

const BloggerIcon: FunctionComponent<React.HtmlHTMLAttributes<SVGElement>> = (
  props
) => {
  return (
    <svg
      fill='none'
      height='24'
      viewBox='0 0 24 24'
      width='24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g stroke='currentColor' stroke-width='1.5'>
        <g stroke-miterlimit='10'>
          <path d='m6 9v6c0 2 1 3 3 3h6c2 0 3-1 3-3v-3c0-.6-.4-1-1-1s-1-.4-1-1v-1c0-2-1-3-3-3h-4c-2 0-3 1-3 3z' />
          <path d='m10 10h2' stroke-linecap='round' stroke-linejoin='round' />
          <path d='m10 14h4' stroke-linecap='round' stroke-linejoin='round' />
        </g>
        <path
          d='m15 22h-6c-5 0-7-2-7-7v-6c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7z'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </g>
    </svg>
  );
};

export default BloggerIcon;