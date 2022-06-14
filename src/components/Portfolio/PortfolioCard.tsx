import React, { FunctionComponent } from 'react';

export interface PortfolioCardProps {
  Image: React.ReactNode
};

const PortfolioCard: FunctionComponent<PortfolioCardProps> = ({ Image }) => {
  return (
    <div className="relative overflow-hidden h-72 w-96 m-2 bg-sky-50">
      <div className='absolute inset-0'>
        {Image}
      </div>
    </div>
  );
}

export default PortfolioCard;
