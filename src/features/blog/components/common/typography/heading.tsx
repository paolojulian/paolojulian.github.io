import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

const H1: FunctionComponent<React.HtmlHTMLAttributes<HTMLHeadingElement>> = ({
  className,
  ...props
}) => {
  return (
    <h1
      className={classNames('text-gray-800 font-bold text-6xl', className)}
      {...props}
    ></h1>
  );
};

const H2: FunctionComponent<React.HtmlHTMLAttributes<HTMLHeadingElement>> = ({
  className,
  ...props
}) => {
  return (
    <h2
      className={classNames('text-gray-800 font-bold text-2xl', className)}
      {...props}
    ></h2>
  );
};

const H3: FunctionComponent<React.HtmlHTMLAttributes<HTMLHeadingElement>> = ({
  className,
  ...props
}) => {
  return (
    <h3
      className={classNames('text-gray-800 font-semibold text-xl', className)}
      {...props}
    ></h3>
  );
};

interface HeadingSubComponents {
  H1: typeof H1;
  H2: typeof H2;
  H3: typeof H3;
}

export type HeadingProps = {};

const Heading: HeadingSubComponents = {
  H1,
  H2,
  H3,
};

export default Heading;
