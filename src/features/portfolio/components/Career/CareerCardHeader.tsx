import Row from 'layouts/Row';
import Stack from 'layouts/Stack';
import React, { FunctionComponent } from 'react';

export type CareerCardHeaderProps = {
  year: number;
  title: string;
  flag: React.ReactNode;
};

const CareerCardHeader: FunctionComponent<CareerCardHeaderProps> = ({
  year,
  title,
  flag,
}) => {
  return (
    <Stack>
      <h3 className='font-medium text-slate-500 text-[16px]'>{year}</h3>
      <Row>
        <h2 className='font-semibold text-slate-200 text-2xl'>{title}</h2>
        <div>{flag}</div>
      </Row>
    </Stack>
  );
};

export default CareerCardHeader;
