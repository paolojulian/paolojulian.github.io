import React, { FunctionComponent, HtmlHTMLAttributes } from 'react';

export type CheckIconProps = {
  // No Props
} & React.SVGProps<SVGSVGElement>;

const CheckIcon: FunctionComponent<CheckIconProps> = ({ ...props }) => {
  return (
    <svg
      width="12"
      height="10"
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.16667 9.03335L0.5 5.36669L1.78333 4.08335L4.16667 6.46669L10.2167 0.416687L11.5 1.70002L4.16667 9.03335Z"
        fill="white"
      />
    </svg>
  );
};

export default CheckIcon;
