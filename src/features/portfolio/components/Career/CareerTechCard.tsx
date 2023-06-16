import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

export type CareerTechCardProps = {
  Image: React.ReactNode;
};

const CareerTechCard: FunctionComponent<CareerTechCardProps> = ({ Image }) => {
  return (
    <div
      className={classNames(
        'rounded-xl w-[100px] h-[100px] flex justify-center items-center',
        'bg-gradient-to-tr bg-opacity-20 from-[#F8FAFC10] from-10% to-[#F8FAFC33] to-10%'
      )}
    >
      {Image}
    </div>
  );
};

export default CareerTechCard;
