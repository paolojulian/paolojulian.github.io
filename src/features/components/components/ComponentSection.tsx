import Row from 'layouts/Row';
import React, { FunctionComponent } from 'react';

export type ComponentSectionProps = {
  title: string;
  children: React.ReactNode;
};

const ComponentSection: FunctionComponent<ComponentSectionProps> = ({
  title,
  children,
}) => {
  return (
    <div className='flex flex-col 2xl:flex-row w-full'>
      <div className='2xl:px-12 pt-16 pb-4'>
        <h3 className='w-32 font-bold text-lg '>{title}</h3>
      </div>
      <ul className='flex-1 p-2 2xl:px-4 2xl:py-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-8'>
        {children}
      </ul>
    </div>
  );
};

export default ComponentSection;
