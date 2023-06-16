import { useRouter } from 'next/router';
import React, { FunctionComponent, useCallback } from 'react';
import FabButton, { FabButtonProps } from './FabButton';

export type MenuItemProps = {
  Icon?: React.ReactNode;
  label?: string;
  href?: string;
} & FabButtonProps;

const MenuItem: FunctionComponent<MenuItemProps> = ({
  Icon,
  label,
  onClick,
  href = '',
  ...props
}) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (href) {
      router.push(href);
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <>
      <div className='group relative w-fit block'>
        <FabButton onClick={handleClick} {...props}>
          {Icon}
        </FabButton>
        <div
          role='tooltip'
          className='z-50 hidden sm:inline-block whitespace-nowrap absolute top-1/2 -translate-y-1/2 w-fit left-full transition-opacity ml-2 py-2 px-3 invisible group-hover:visible text-sm font-medium text-white dark:text-gray-800 bg-gray-800 dark:bg-white rounded-lg tooltip '
        >
          {label}
          <div className='tooltip-arrow' data-popper-arrow></div>
        </div>
      </div>
    </>
  );
};

export default MenuItem;
