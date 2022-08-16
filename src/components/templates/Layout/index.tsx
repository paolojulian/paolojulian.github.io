import * as React from "react"
import ModalProvider from "../../../providers/modal"
import Landing from "../../organisms/Landing"

import Navbar from "../../organisms/Navbar"
import "./Layout.scss"

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <ModalProvider>
    <div className="flex flex-col">
      <Landing>
        <Navbar />
        <main className="bg-sky-50">{children}</main>
      </Landing>
    </div>
  </ModalProvider>
)

export default Layout
