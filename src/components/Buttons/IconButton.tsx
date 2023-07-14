import classNames from 'classnames';
import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';

export type IconButtonProps = {
  // No Props
} & ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton: FunctionComponent<IconButtonProps> = ({
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={classNames(
        'p-2 rounded-full transition-colors md:hover:bg-gray-200 active:bg-gray-300 active:scale-[0.97]',
        className
      )}
    ></button>
  );
};

export default IconButton;
