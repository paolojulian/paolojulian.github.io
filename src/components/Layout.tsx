import * as React from "react"
import Landing from "./Landing"

import "./Layout.css"

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="flex flex-col">
    <Landing>
      <nav
        id="navbar"
        className="relative top-0 left-0 right-0 z-10 w-full h-14 bg-gray-800"
      >
        <div className="mx-auto max-w-screen-lg h-full">
          <div className="flex text-gray-50 justify-center md:justify-end items-center h-full tracking-wider">
            <a href="#top" className="ml-5 home hover:text-green-600 transition-colors">
              HOME
            </a>
            <a href="#about" className="ml-5 home hover:text-green-600 transition-colors">
              ABOUT
            </a>
            <a href="#portfolio" className="ml-5 home hover:text-green-600 transition-colors">
              PORTFOLIO
            </a>
            <a href="#contact" className="ml-5 home hover:text-green-600 transition-colors">
              CONTACT
            </a>
          </div>
        </div>
      </nav>
      {children}
    </Landing>
  </div>
)

export default Layout
