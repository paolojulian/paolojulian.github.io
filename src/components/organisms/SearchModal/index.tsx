import { Tab } from '@headlessui/react';
import classNames from 'classnames';
import React, { FunctionComponent, useEffect, useState } from 'react';
import CloseIcon from '../../atoms/CloseIcon';
import Input from '../../atoms/Input';
import Modal, { ModalProps } from '../../layouts/Modal';

export type SearchModalProps = {
  onDismiss?: () => void;
} & ModalProps;

const SearchModal: FunctionComponent<SearchModalProps> = (props) => {
  const {
    open,
    onDismiss = () => {
      /** Empty */
    },
    ...otherProps
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const dismiss = () => {
    setIsOpen(false);
    onDismiss();
  };

  return (
    <Modal
      size='max-w-lg'
      type='Info'
      open={isOpen}
      closeButton={false}
      containerClass='p-4'
      {...otherProps}
    >
      <div className='flex flex-col space-y-2'>
        {/* Search Bar */}
        <div>
          <Input name='Search' label='Search' placeholder='...' />
        </div>
        <div className='flex items-center justify-center flex-1'>
          <div className='text-gray-600 py-12'>No Recent Searches</div>
        </div>
        <div className='flex justify-end'>
          <button
            className='p-1 transition-colors group bg-red-500 hover:bg-red-700 rounded-full'
            onClick={dismiss}
          >
            <CloseIcon className='h-3 w-3 transition-colors text-red-500 group-hover:text-white' />
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default SearchModal;
