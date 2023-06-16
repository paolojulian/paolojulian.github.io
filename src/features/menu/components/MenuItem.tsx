import classNames from 'classnames';
import Stack from 'layouts/Stack';
import Image, { StaticImageData } from 'next/image';
import React, { FunctionComponent, useEffect, useState } from 'react';

type MenuItemVariants =
  | 'home'
  | 'blogsite'
  | 'components'
  | 'portfolio'
  | 'search'
  | 'settings';

export type MenuItemProps = {
  isActive: boolean;
  variant: MenuItemVariants;
  onClick?: () => void;
};

const MenuLogoVariants: Record<MenuItemVariants, StaticImageData> = {
  home: require('../assets/images/home.png'),
  blogsite: require('../assets/images/blogsite.png'),
  portfolio: require('../assets/images/portfolio.png'),
  components: require('../assets/images/components.png'),
  search: require('../assets/images/search.png'),
  settings: require('../assets/images/settings.png'),
};

const MenuItem: FunctionComponent<MenuItemProps> = ({
  isActive,
  variant,
  onClick = () => {
    /** */
  },
}) => {
  const [mouseUp, setMouseUp] = useState(false);
  const handleMouseUp = () => {
    setMouseUp(true);
    setTimeout(() => {
      setMouseUp(false);
    }, 400);
  };

  return (
    <Stack
      className={classNames(
        'relative justify-center items-center w-14 h-14 rounded-full',
        'select-none',
        'cursor-pointer',
        'transition duration-100 active:scale-90',
        isActive
          ? 'bg-primary-900 hover:bg-primary-800'
          : 'bg-none hover:bg-primary-900'
      )}
      onMouseUp={handleMouseUp}
      onClick={onClick}
    >
      {mouseUp && (
        <div
          className={classNames(
            '-z-0 animate-ping absolute inset-0 rounded-full w-full h-full',
            'duration-100 bg-primary-900'
          )}
        ></div>
      )}
      <Image
        className='z-10 w-7 h-7'
        src={MenuLogoVariants[variant]}
        alt={variant}
      />
    </Stack>
  );
};

export default MenuItem;
