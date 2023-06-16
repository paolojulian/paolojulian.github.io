import Stack from 'layouts/Stack';
import { useRouter } from 'next/router';
import React, { FunctionComponent } from 'react';
import MenuItem from './MenuItem';

export type MenuProps = {
  // No Props
};

const Menu: FunctionComponent<MenuProps> = (props) => {
  const router = useRouter();

  return (
    <Stack className='gap-3 px-5 justify-center h-screen'>
      <MenuItem variant='home' isActive />
      <MenuItem variant='blogsite' isActive={false} />
      <MenuItem
        variant='portfolio'
        isActive={false}
        onClick={() => {
          router.push('/portfolio');
        }}
      />
      <MenuItem variant='components' isActive={false} />
      <MenuItem variant='search' isActive={false} />
      <MenuItem variant='settings' isActive={false} />
    </Stack>
  );
};

export default Menu;
