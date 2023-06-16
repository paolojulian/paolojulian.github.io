import classNames from 'classnames';
import Image from 'next/image';
import React, { FunctionComponent } from 'react';

export type AvatarImageProps = {
  alt: string;
} & React.ComponentProps<typeof Image>;

const AvatarImage: FunctionComponent<AvatarImageProps> = ({ className, alt, ...props }) => {
  return <Image {...props} alt={alt} className={classNames('rounded-full', className)} />;
};

export default AvatarImage;
