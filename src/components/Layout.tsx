import * as React from "react"
import Landing from "./Landing"

import "./Layout.scss"
import Navbar from "./Navbar"

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex flex-col">
    <Landing>
      <Navbar />
      <main className="bg-sky-50">
        {children}
      </main>
    </Landing>
  </div>
)

export default Layout
