import classNames from 'classnames';
import Stack from 'layouts/Stack';
import React, { FunctionComponent, useMemo } from 'react';

export type ComponentCardProps = {
  name: string;
  numberOfComponents: number;
};

const ComponentCard: FunctionComponent<ComponentCardProps> = ({
  name,
  numberOfComponents,
}) => {
  const componentWord = useMemo(
    () => `${numberOfComponents} Component${numberOfComponents > 1 ? 's' : ''}`,
    [numberOfComponents]
  );

  return (
    <Stack
      className={classNames(
        'group relative',
        'gap-2 cursor-pointer',
        'before:absolute before:bg-gray-100 before:-inset-2.5 before:rounded-lg before:opacity-0 hover:before:opacity-100'
      )}
    >
      <div className='relative aspect-[2/1] overflow-hidden bg-primary-100 rounded-lg border border-gray-400'>
        {/* Image */}
      </div>
      <Stack className='z-10'>
        <h1 className='group-hover:text-primary-600 font-semibold text-lg'>
          {name}
        </h1>
        <h2 className='text-sm'>{componentWord}</h2>
      </Stack>
    </Stack>
  );
};

export default ComponentCard;
