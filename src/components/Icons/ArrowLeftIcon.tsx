import React, { FunctionComponent, HtmlHTMLAttributes } from 'react';

export type ArrowLeftIconProps = {
  // No Props
} & React.SVGProps<SVGSVGElement>;

const ArrowLeftIcon: FunctionComponent<ArrowLeftIconProps> = ({ ...props }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_138_7476)">
        <path
          d="M7.828 11H20V13H7.828L13.192 18.364L11.778 19.778L4 12L11.778 4.222L13.192 5.636L7.828 11Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_138_7476">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowLeftIcon;
