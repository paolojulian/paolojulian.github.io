import Row from 'layouts/Row';
import Stack from 'layouts/Stack';
import React, { FunctionComponent } from 'react';

export type ProfileWithPictureProps = {
  name: string;
  position: string;
  imageUrl: string;
};

const ProfileWithPicture: FunctionComponent<ProfileWithPictureProps> = ({
  name,
  position,
  imageUrl,
}) => {
  return (
    <Row className="justify-end items-center gap-4">
      <Stack className="items-end">
        <h3 className='text-xl text-slate-900 font-semibold'>{name}</h3>
        <span className='text-base text-slate-500 font-semibold'>{position}</span>
      </Stack>
      <div className='rounded-lg bg-white h-16 w-16'></div>
    </Row>
  );
};

export default ProfileWithPicture;
