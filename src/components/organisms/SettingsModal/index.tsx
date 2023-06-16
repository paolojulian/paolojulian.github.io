import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { getTheme } from '../../../lib/helpers';
import Modal, { ModalProps } from '../../layouts/Modal';

export type SettingsModalProps = {
  // No Props
} & ModalProps;

const LOCAL_STORAGE_THEME_KEY = 'selectedAppearanceIndex';
type appearanceCategoryTypes = 'Device Theme' | 'Dark' | 'Light';
const appearanceCategories: appearanceCategoryTypes[] = [
  'Device Theme',
  'Dark',
  'Light',
];

const SettingsModal: FunctionComponent<SettingsModalProps> = ({ ...props }) => {
  const [selectedAppearance, setSelectedAppearance] = useState(0);

  useEffect(() => {
    setSelectedAppearance(
      Number(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || 0)
    );
  }, []);

  const handleSelectAppearance = (index: number) => {
    setSelectedAppearance(index);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, index.toString());
    const appearance = appearanceCategories[index] || appearanceCategories[0];
    let theme: 'dark' | 'light';
    switch (appearance) {
      case 'Device Theme':
        theme = getTheme();
        break;
      case 'Light':
        theme = 'light';
        break;
      case 'Dark':
        theme = 'dark';
        break;
    }

    localStorage.theme = theme;
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <Modal title='Settings' containerClass='p-8' size='max-w-md' type='Info' {...props}>
      <div className='flex flex-col space-y-2'>
        {/* Appearance */}
        <div>
          <div className='mb-1 text-sm text-gray-500'>Appearance</div>
          <div>
            <Tab.Group
              onChange={handleSelectAppearance}
              selectedIndex={selectedAppearance}
            >
              <Tab.List className='flex space-x-1 rounded-xl bg-gray-900/20 p-1'>
                {appearanceCategories.map((category) => (
                  <Tab
                    key={category}
                    className={({ selected }) =>
                      classNames(
                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-gray-800',
                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-400 focus:outline-none focus:ring-2',
                        selected
                          ? 'bg-white shadow'
                          : 'text-gray-700 dark:text-blue-100 hover:bg-gray-800/[0.75] dark:hover:bg-white/[0.12] hover:text-white'
                      )
                    }
                  >
                    {category}
                  </Tab>
                ))}
              </Tab.List>
            </Tab.Group>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SettingsModal;
