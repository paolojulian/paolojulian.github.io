import React, { FunctionComponent } from 'react';
import { Montserrat } from '@next/font/google';

// const font = Montserrat({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800'] });

export type PortfolioLayoutProps = {
  children: React.ReactNode;
};

const PortfolioLayout: FunctionComponent<PortfolioLayoutProps> = (props) => {
  return <div>{props.children}</div>;
};

export default PortfolioLayout;
