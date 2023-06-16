import React, { FunctionComponent, HtmlHTMLAttributes } from 'react';

export type FacebookIconProps = {
  // No Props
} & React.SVGProps<SVGSVGElement>;

const FacebookIcon: FunctionComponent<FacebookIconProps> = ({ ...props }) => {
  return (
    <svg
      width='22'
      height='22'
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20.625 11.058C20.625 5.74275 16.3152 1.43298 11 1.43298C5.68477 1.43298 1.375 5.74275 1.375 11.058C1.375 15.8619 4.89414 19.8438 9.49609 20.5666V13.8411H7.0516V11.058H9.49609V8.93748C9.49609 6.52564 10.9334 5.19232 13.1317 5.19232C14.1848 5.19232 15.2866 5.38053 15.2866 5.38053V7.7494H14.0723C12.8773 7.7494 12.5035 8.49104 12.5035 9.2533V11.058H15.1727L14.7464 13.8411H12.5039V20.5674C17.1059 19.8451 20.625 15.8632 20.625 11.058Z'
        fill='white'
      />
    </svg>
  );
};

export default FacebookIcon;
