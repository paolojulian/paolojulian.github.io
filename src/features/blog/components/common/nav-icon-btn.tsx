import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

export type NavIconButtonProps = {
  name: string;
} & React.HtmlHTMLAttributes<HTMLButtonElement>;

const NavIconButton: FunctionComponent<NavIconButtonProps> = ({
  children,
  name,
  ...props
}) => {
  return (
    <div className='relative'>
      <button
        {...props}
        className='p-2 rounded-full transition-colors group md:hover:bg-gray-200 active:bg-gray-300 active:scale-[0.97]'
        aria-haspopup='true'
      >
        {children}
        <div
          className={classNames(
            'absolute ml-1 left-full -translate-y-1/2 top-1/2 px-4 py-2 bg-gray-800/95 text-gray-50 rounded-lg',
            'opacity-0 left-0 group-hover:opacity-100 group-hover:left-full',
            'pointer-events-none'
          )}
        >
          {name}
        </div>
      </button>
    </div>
  );
};

export default NavIconButton;
