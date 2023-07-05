import React, { FunctionComponent } from 'react';
import { Montserrat } from '@next/font/google';

const font = Montserrat({ subsets: ['latin'] });

export type PortfolioLayoutProps = {
  children: React.ReactNode;
};

const PortfolioLayout: FunctionComponent<PortfolioLayoutProps> = (props) => {
  return <div className={font.className}>{props.children}</div>;
};

export default PortfolioLayout;
