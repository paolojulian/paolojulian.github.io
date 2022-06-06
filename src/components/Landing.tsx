import { StaticImage } from "gatsby-plugin-image"
import React, { FC, ReactNode } from "react"

import "./Landing.scss"

type LandingProps = {
  children: ReactNode
}

const Landing: FC<LandingProps> = ({ children }) => {
  return (
    <div className="position-relative h-screen bg-stone-900">
      <div className="parallax">
        <div className={`parallax__layer parallax__layer__1`}>
          <StaticImage
            className="h-full w-full"
            alt="Human"
            src="../images/parallax/parallax__1.png"
          />
        </div>
        <div className={`parallax__layer parallax__layer__8`}>
          <StaticImage
            className="h-full w-full"
            alt="Human"
            src="../images/parallax/parallax__2.png"
          />
        </div>
        <div className={`parallax__layer parallax__layer__11`}>
          <StaticImage
            className="h-full w-full"
            alt="Human"
            src="../images/parallax/parallax__3.png"
          />
        </div>
        <div className={`parallax__base`}>
          <StaticImage
            className="h-full w-full"
            alt="Human"
            src="../images/parallax/parallax__0.png"
          />
        </div>
        <div className="parallax__cover">{children}</div>
      </div>
    </div>
  )
}

export default Landing
