import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

export type NavIconButtonProps = {
  name: string;
} & React.HtmlHTMLAttributes<HTMLAnchorElement>;

const NavIconButton: FunctionComponent<NavIconButtonProps> = ({
  children,
  name,
  ...props
}) => {
  return (
    <div className='relative'>
      <a
        {...props}
        className='p-2 rounded-full transition-colors group md:hover:bg-gray-200 active:bg-gray-300 active:scale-[0.97] cursor-pointer flex items-center justify-center'
        aria-haspopup='true'
      >
        {children}
        <div
          className={classNames(
            'absolute ml-1 left-full transition-opacity -translate-y-1/2 top-1/2 px-4 py-2 bg-gray-800/95 text-gray-50 rounded-lg',
            'opacity-0 group-hover:opacity-100',
            'pointer-events-none'
          )}
        >
          {name}
        </div>
      </a>
    </div>
  );
};

export default NavIconButton;
