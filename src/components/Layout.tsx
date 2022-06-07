import * as React from "react"
import Landing from "./Landing"

import "./Layout.css"
import Navbar from "./Navbar"

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex flex-col">
    <Landing>
      <Navbar />
      {children}
    </Landing>
  </div>
)

export default Layout
