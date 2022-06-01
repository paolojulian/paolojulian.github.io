import { StaticImage } from "gatsby-plugin-image"
import React, { FC } from "react"

import "./Landing.scss"

export interface LandingProps {}

const Landing: FC<LandingProps> = props => {
  return (
    <div className="position-relative h-screen bg-stone-900">
      <div className="parallax">
        <div className="parallax__layer parallax__layer__2">
          <StaticImage className="h-full w-full" alt="Human" src="../images/parallax_0.png" />
        </div>
        <div className="parallax__layer parallax__layer__1"></div>
        <div className="parallax__layer parallax__layer__0"></div>
      </div>
    </div>
  )
}

export default Landing
