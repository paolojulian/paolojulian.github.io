import React, { FunctionComponent } from "react"

export interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = props => {
  return (
    <nav
      id="navbar"
      className="sticky top-0 left-0 right-0 z-10 w-full h-14 bg-gray-800"
    >
      <div className="mx-auto max-w-screen-lg h-full">
        <div className="flex text-gray-50 justify-center md:justify-end items-center h-full tracking-wider">
          <a
            href="#top"
            className="ml-5 home hover:text-green-600 transition-colors"
          >
            HOME
          </a>
          <a
            href="#about"
            className="ml-5 home hover:text-green-600 transition-colors"
          >
            ABOUT
          </a>
          <a
            href="#portfolio"
            className="ml-5 home hover:text-green-600 transition-colors"
          >
            PORTFOLIO
          </a>
          <a
            href="#contact"
            className="ml-5 home hover:text-green-600 transition-colors"
          >
            CONTACT
          </a>
       </div>
      </div>
    </nav>
  )
}

export default Navbar
