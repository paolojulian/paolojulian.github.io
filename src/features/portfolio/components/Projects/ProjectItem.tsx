import classNames from 'classnames';
import Row from 'layouts/Row';
import Stack from 'layouts/Stack';
import React, { FunctionComponent } from 'react';

type ProjectItemTypes = 'web' | 'mobile';

export type ProjectItemProps = {
  ImageComponent: React.ReactNode;
  type: ProjectItemTypes;
  width: string;
};

const ProjectItem: FunctionComponent<ProjectItemProps> = ({
  ImageComponent,
  type,
  width,
}) => {
  if (type === 'web') {
    return (
      <div
        className={classNames(
          'rounded-xl overflow-hidden shadow-lg h-[300px]',
          width
        )}
      >
        <Stack className='h-full'>
          <Row className='w-full space-x-1 h-[27px] bg-white px-3 items-center'>
            <div className='rounded-full w-3 h-3 bg-slate-400'></div>
            <div className='rounded-full w-3 h-3 bg-slate-400'></div>
            <div className='rounded-full w-3 h-3 bg-slate-400'></div>
          </Row>
          <div className='flex-1 relative'>{ImageComponent}</div>
        </Stack>
      </div>
    );
  }
  return (
    <div
      className={classNames('rounded-xl relative shadow-lg h-[300px]', width)}
    >
      {ImageComponent}
    </div>
  );
};

export default ProjectItem;
