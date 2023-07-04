import classNames from 'classnames';
import Row from 'layouts/Row';
import Stack from 'layouts/Stack';
import React, { FunctionComponent } from 'react';
import styles from './ProjectCard.module.scss';

type ProjectCardTypes = 'desktop' | 'mobile';

export type ProjectCardProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
  Icons?: React.ReactNode;
  type?: ProjectCardTypes;
};

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  title,
  description,
  Icons = null,
  type = 'desktop',
  children,
}) => {
  return (
    <Stack
      className={classNames(
        'w-[300px]',
        'relative',
        'space-y-4',
        'mx-[20px]',
        styles.container
      )}
    >
      {/* Picture */}
      <Stack
        className={classNames(
          'rounded-2xl border border-slate-400 overflow-hidden test',
          styles.image
        )}
      >
        <Row className='border-b border-slate-400 items-center px-3 py-2'>
          <div className='w-4 h-4 rounded-full bg-slate-400'></div>
        </Row>
        <Stack className='h-[200px] bg-slate-400/20'>
          <Row className='flex-1'>
            <Stack
              className={classNames(
                'flex-1 overflow-hidden items-center',
                type === 'mobile' ? 'justify-center' : ''
              )}
            >
              {children}
            </Stack>
            {type === 'mobile' ? (
              <Stack className='w-[75px] h-full border-l border-slate-400'>
                <Row className='border-b border-slate-400 p-1 space-x-2'>
                  <div className='w-3 h-2 rounded-full bg-slate-400'></div>
                  <div className='w-4 h-2 rounded-full bg-slate-400'></div>
                  <div className='w-4 h-2 rounded-full bg-slate-400'></div>
                </Row>
                <Stack className='border-b border-slate-400 flex-1 p-2 space-y-1'>
                  <div className='w-[calc(100%-.4rem)] h-2 rounded-full bg-slate-400'></div>
                  <div className='w-[calc(100%-1rem)] h-2 rounded-full bg-slate-400'></div>
                  <div className='w-[calc(100%-2rem)] h-2 rounded-full bg-slate-400'></div>
                </Stack>
                <Stack className='flex-1 p-2 space-y-1'>
                  <div className='w-[calc(100%-2rem)] h-2 rounded-full bg-slate-400'></div>
                  <div className='w-[calc(100%-2rem)] h-2 rounded-full bg-slate-400'></div>
                  <div className='w-[calc(100%-.5rem)] h-2 rounded-full bg-slate-400'></div>
                  <div className='w-[calc(100%-1rem)] h-2 rounded-full bg-slate-400'></div>
                </Stack>
              </Stack>
            ) : null}
          </Row>
        </Stack>
      </Stack>

      {/* Details */}
      <Stack>
        <h3 className='font-semibold text-lg text-orange-300'>{title}</h3>
        <p className='font-regular text-sm text-slate-300'>{description}</p>
      </Stack>

      {/* Icons */}
      {/* <Row>{Icons}</Row> */}
    </Stack>
    // <div
    //   className={classNames(
    //     'h-[350px] w-[475px]',
    //     'relative',
    //     'bg-[linear-gradient(207.99deg,_rgba(248,250,252,0.2)_13.77%,rgba(248,250,252,0)_173.77%)]',
    //     'border border-slate-700/5'
    //   )}
    // >
    //   {/* Contents */}
    //   <div className='w-full h-full pointer-events-none overflow-x-auto hidden-scrollbar p-[25px]'>
    //     <Row className='space-x-4 w-fit h-full flex-nowrap'>{children}</Row>
    //   </div>
    //   {/* Overlay */}
    //   <div className='absolute inset-0 w-full h-full bg-gradient-to-t from-bg  to-transparent pointer-events-none'>
    //     <Stack className='justify-end h-full p-4'>
    //       <h3 className='font-bold text-base'>{title}</h3>
    //       <p className='font-base text-sm text-slate-400'>{description}</p>
    //     </Stack>
    //   </div>
    // </div>
  );
};

export default ProjectCard;
