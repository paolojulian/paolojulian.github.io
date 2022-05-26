import * as React from "react"

import './layout.css';

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex flex-col">
   {children}
  </div>
)

export default Layout;
