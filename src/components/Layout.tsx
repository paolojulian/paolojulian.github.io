import * as React from "react"
import Landing from "./Landing"

import "./Layout.css"

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex flex-col">
    <Landing>
      {children}
    </Landing>
  </div>
)

export default Layout
