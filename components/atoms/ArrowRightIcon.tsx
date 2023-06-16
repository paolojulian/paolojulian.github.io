import React, { forwardRef, FunctionComponent, SVGProps } from 'react';

export type ArrowRightIconProps = {
  // No Props
} & SVGProps<SVGSVGElement>;

const ArrowRightIcon = forwardRef<SVGSVGElement, ArrowRightIconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className={` w-6 h-6 ${className}`}
        {...props}
        ref={ref}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
        />
      </svg>
    );
  }
);

ArrowRightIcon.displayName = 'ArrowRightIcon';

export default ArrowRightIcon;
