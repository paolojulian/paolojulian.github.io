import React, { FunctionComponent } from "react"

export interface SocialIconProps {
  children: React.ReactNode
}

const SocialIcon: FunctionComponent<SocialIconProps> = props => {
  return (
    <div className="rounded py-2 px-3 mx-2 bg-gray-500 text-sky-50">
      {props.children}
    </div>
  )
}

export default SocialIcon
