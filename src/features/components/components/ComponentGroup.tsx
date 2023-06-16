import Row from 'layouts/Row';
import Stack from 'layouts/Stack';
import React, { FunctionComponent } from 'react';

export type ComponentGroupProps = {
  title: string;
  children: React.ReactNode;
};

const ComponentGroup: FunctionComponent<ComponentGroupProps> = ({
  title,
  children,
}) => {
  return (
    <Stack className=''>
      <Stack className="py-4">
        <h2 className='font-bold text-xl'>{title}</h2>
        <h4 className="font-base text-base text-gray-500">Heroes, feature sections, newsletter sign up forms — everything you need to build beautiful marketing websites.</h4>
      </Stack>
      <hr />
      <Row>{children}</Row>
    </Stack>
  );
};

export default ComponentGroup;
