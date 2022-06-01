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
        <div className={`parallax__layer parallax__layer__0`}>
          <StaticImage
            className="h-full w-full"
            alt="Human"
            src="../images/landing/parallax_0.png"
          />
        </div>
        <div className={`parallax__layer parallax__layer__1`}>
          <StaticImage
            className="h-full w-full"
            alt="Human"
            src="../images/landing/parallax_1.png"
          />
        </div>
        <div className={`parallax__layer parallax__layer__2`}>
          <StaticImage
            className="h-full w-full"
            alt="Human"
            src="../images/landing/parallax_2.png"
          />
        </div>
        <div className={`parallax__layer parallax__layer__3`}>
          <StaticImage
            className="h-full w-full"
            alt="Human"
            src="../images/landing/parallax_3.png"
          />
        </div>
        <div className={`parallax__layer parallax__layer__4`}>
          <StaticImage
            className="h-full w-full"
            alt="Human"
            src="../images/landing/parallax_4.png"
          />
        </div>
        <div className={`parallax__layer parallax__layer__5`}>
          <StaticImage
            className="h-full w-full"
            alt="Human"
            src="../images/landing/parallax_5.png"
          />
        </div>
        <div className={`parallax__layer parallax__layer__6`}>
          <StaticImage
            className="h-full w-full"
            alt="Human"
            src="../images/landing/parallax_6.png"
          />
        </div>
        <div className={`parallax__layer parallax__layer__7`}>
          <StaticImage
            className="h-full w-full"
            alt="Human"
            src="../images/landing/parallax_7.png"
          />
        </div>
        <div className={`parallax__layer parallax__layer__8`}>
          <StaticImage
            className="h-full w-full"
            alt="Human"
            src="../images/landing/parallax_8.png"
          />
        </div>
        <div className={`parallax__layer parallax__layer__9`}>
          <StaticImage
            className="h-full w-full"
            alt="Human"
            src="../images/landing/parallax_9.png"
          />
        </div>
        <div className={`parallax__layer parallax__layer__10`}>
          <StaticImage
            className="h-full w-full"
            alt="Human"
            src="../images/landing/parallax_10.png"
          />
        </div>
        <div className={`parallax__layer parallax__layer__11`}>
          <StaticImage
            className="h-full w-full"
            alt="Human"
            src="../images/landing/parallax_11.png"
          />
        </div>
        <div className={`parallax__layer parallax__layer__0`}>
          <StaticImage
            className="h-full w-full"
            alt="Human"
            src="../images/landing/moon.png"
          />
        </div>
        <div className="parallax__cover">{children}</div>
      </div>
    </div>
  )
}

export default Landing
