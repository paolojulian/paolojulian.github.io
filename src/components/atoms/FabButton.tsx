import React, { ButtonHTMLAttributes } from 'react';

export type FabButtonProps = {
  // No Props
} & ButtonHTMLAttributes<HTMLButtonElement>;

const FabButton = React.forwardRef<HTMLButtonElement, FabButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={`p-2 hover:bg-gray-200 active:bg-gray-100 rounded-full transition-colors ${className}`}
        {...props}
        ref={ref}
      ></button>
    );
  }
);

export default FabButton;
