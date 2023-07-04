import Row from 'layouts/Row';
import Stack from 'layouts/Stack';
import React, { FunctionComponent } from 'react';
import CareerCardHeader from './CareerCardHeader';
import AnimateOnIntersect, {
  AnimateOnIntersectContext,
} from 'components/Animations/AnimateOnIntersect';
import CareerTechCard from './CareerTechCard';
import Image from 'next/image';
import classNames from 'classnames';

export type CareerCardProps = {
  DescriptionComponent: React.ReactNode;
  HeaderComponent: React.ReactNode;
  apps: string[];
  TechsComponent?: React.ReactNode;
  TechIcons?: Array<string | null>;
};

interface SubComponents {
  Header: typeof CareerCardHeader;
}

const CareerCard: FunctionComponent<CareerCardProps> & SubComponents = ({
  DescriptionComponent,
  HeaderComponent,
  apps,
  TechsComponent = null,
  TechIcons = [],
}) => {
  return (
    <Row className='h-full'>
      {/* Icon */}
      <AnimateOnIntersect type='fade'>
        <Stack className='items-center min-h-full pt-4 pr-4 md:pr-12 space-y-4'>
          <div
            className={classNames(
              'w-4 md:w-8 h-4 md:h-8 rounded-full bg-slate-50 shadow-[0_0_10px_10px_rgb(255,255,255,0.15)]'
            )}
          ></div>
          {/* Line */}
          <div
            className={classNames(
              'flex-1 w-0.5 md:w-1 rounded-full bg-slate-50'
            )}
          >
            &nbsp;
          </div>
        </Stack>
      </AnimateOnIntersect>
      <div className='flex-1 mb-24'>
        <Stack className='space-y-7'>
          <AnimateOnIntersect type='fadeFromRight'>
            <Stack className='space-y-2'>
              {HeaderComponent}
              <div className='text-slate-500 text-xl md:text-2xl font-base'>
                {DescriptionComponent}
              </div>
            </Stack>
          </AnimateOnIntersect>
          <AnimateOnIntersect type='fadeFromRight'>
            <Row className='flex-wrap gap-2'>
              {apps.map((app, i) => (
                <ul
                  className='text-sm px-5 py-2 text-slate-300 border border-slate-500 rounded-3xl'
                  key={i}
                >
                  {app}
                </ul>
              ))}
            </Row>
          </AnimateOnIntersect>
        </Stack>
      </div>
    </Row>
  );
};

CareerCard.Header = CareerCardHeader;

export default CareerCard;
