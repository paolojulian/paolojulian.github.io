import classNames from 'classnames';
import React, { FunctionComponent, HtmlHTMLAttributes } from 'react';

export type SubtitleProps = {
  // No Props
} & HtmlHTMLAttributes<HTMLDivElement>;

const Subtitle: FunctionComponent<SubtitleProps> = ({
  className,
  ...props
}) => {
  return (
    <p
      className={classNames('text-base font-medium text-gray-500', className)}
      {...props}
    ></p>
  );
};

export default Subtitle;
