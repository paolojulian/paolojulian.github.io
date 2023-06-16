import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

export type TextHighlightProps = {
  textColor?: string;
  children: React.ReactNode;
};

const TextHighlight: FunctionComponent<TextHighlightProps> = ({
  textColor = 'text-white',
  children,
}) => {
  return <span className={classNames(textColor, 'font-bold')}>{children}</span>;
};

export default TextHighlight;
