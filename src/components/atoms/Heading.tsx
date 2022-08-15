import React, { FunctionComponent } from "react"

export interface HeadingProps {
  children: React.ReactNode
}

const Heading: FunctionComponent<HeadingProps> = ({ children }) => {
  return (
    <h3 className="text-2xl mx-4 font-semibold leading-normal">{children}</h3>
  )
}

export default Heading
