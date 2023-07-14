import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

const Paragraph: FunctionComponent<
  React.HtmlHTMLAttributes<HTMLParagraphElement>
> = ({ children, className }) => {
  return (
    <p className={classNames('text-gray-700 text-base', className)}>{children}</p>
  );
};

export default Paragraph;
