import classNames from 'classnames';
import React, { FunctionComponent, HtmlHTMLAttributes } from 'react';

export type TitleProps = {
  // No Props
} & HtmlHTMLAttributes<HTMLDivElement>;

const Title: FunctionComponent<TitleProps> = ({
  className,
  ...props
}) => {
  return (
    <p
      className={classNames('text-3xl font-bold text-orange-300', className)}
      {...props}
    ></p>
  );
};

export default Title;
