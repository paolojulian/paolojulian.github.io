import classNames from 'classnames';
import Stack from 'layouts/Stack';
import React, { FunctionComponent } from 'react';

export type AvatarNameProps = {
  size: number;
  name: string;
};

const AvatarName: FunctionComponent<AvatarNameProps> = ({ size, name }) => {
  return (
    <Stack
      className={classNames('rounded-full bg-orange-500 justify-center items-center')}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        objectFit: 'contain',
      }}
    >
      <span className="text-white">{name.charAt(0)}</span>
    </Stack>
  );
};

export default AvatarName;
