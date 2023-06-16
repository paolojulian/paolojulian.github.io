import React, { FunctionComponent, HtmlHTMLAttributes } from 'react';

export type BackIconProps = {
  // No Props
} & React.SVGProps<SVGSVGElement>;

const BackIcon: FunctionComponent<BackIconProps> = ({ ...props }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_171_8766)">
        <path
          d="M10.8278 12.0002L15.7778 16.9502L14.3638 18.3642L7.99983 12.0002L14.3638 5.63623L15.7778 7.05023L10.8278 12.0002Z"
          fill="#8070FF"
        />
      </g>
      <defs>
        <clipPath id="clip0_171_8766">
          <rect width="24" height="24" fill="white" transform="translate(24) rotate(90)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default BackIcon;
