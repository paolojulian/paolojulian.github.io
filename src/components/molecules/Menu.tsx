import classNames from 'classnames';
import { useRouter } from 'next/router';
import React, { FunctionComponent, useCallback, useState } from 'react';
import colors from 'tailwindcss/colors';
import useSearchStore from '../../store/search';
import BookIcon from '../atoms/BookIcon';
import FabButton from '../atoms/FabButton';
import FacebookIcon from '../atoms/FacebookIcon';
import HomeIcon from '../atoms/HomeIcon';
import LinkedInIcon from '../atoms/LinkedInIcon';
import ListIcon from '../atoms/ListIcon';
import MenuItem from '../atoms/MenuItem';
import SearchIcon from '../atoms/SearchIcon';
import SettingsIcon from '../atoms/SettingsIcon';
import SearchModal from '../organisms/SearchModal';
import SettingsModal from '../organisms/SettingsModal';

export type MenuProps = {
  // No Props
};

const Menu: FunctionComponent<MenuProps> = (props) => {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <nav
        className={classNames(
          'sm:fixed sm:top-0',
          'px-2 py-2 sm:py-0',
          'w-screen sm:w-20 sm:h-screen',
          'text-gray-500',
          'sm:border-r border-gray-200 dark:border-gray-800',
          'flex sm:flex-col justify-center items-center space-x-2 sm:space-x-0 sm:space-y-2'
        )}
      >
        <MenuItem href='/' Icon={<HomeIcon />} label='Home' />
        <a href={'https://paolojulian.github.io'} target='__blank'>
          <MenuItem Icon={<BookIcon />} label='Portfolio' />
        </a>
        <MenuItem Icon={<ListIcon />} label='Components'
          onClick={() => router.push('/components')}
        />
        <MenuItem
          Icon={<SearchIcon />}
          label='Search'
          onClick={() => setIsSearchModalOpen((prev) => !prev)}
        />
        <MenuItem
          Icon={<SettingsIcon />}
          label='Settings'
          onClick={() => setIsSettingsModalOpen((prev) => !prev)}
        />
        <FabButton className='bg-blue-500 hover:bg-blue-400 hidden sm:block'>
          <a
            href={'https://www.facebook.com/profile.php?id=100078321445396'}
            target='__blank'
          >
            <FacebookIcon fill={colors.white} />
          </a>
        </FabButton>
        <FabButton className='bg-blue-600 hover:bg-blue-400 hidden sm:block'>
          <a href={'https://www.linkedin.com/in/pipz/'} target='__blank'>
            <LinkedInIcon fill={colors.white} />
          </a>
        </FabButton>
      </nav>

      <SearchModal
        open={isSearchModalOpen}
        onClose={setIsSearchModalOpen}
        onDismiss={() => setIsSearchModalOpen(false)}
      />

      <SettingsModal
        open={isSettingsModalOpen}
        onClose={setIsSettingsModalOpen}
      />
    </>
  );
};

export default Menu;
