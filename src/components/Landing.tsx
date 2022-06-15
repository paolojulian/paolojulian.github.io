import { StaticImage } from "gatsby-plugin-image"
import React, { FC, ReactNode } from "react"

import "./Landing.scss"
import Navbar from "./Navbar"
import Preloader from "./Preloader"

type LandingProps = {
  children: ReactNode
}

const Landing: FC<LandingProps> = ({ children }) => {
  return (
    <section id="top" className="position-relative h-screen bg-stone-900">
      <div className="parallax">
        {/* Paolo Julian */}
        <div className="font-semibold absolute top-36 left-1/2 -translate-x-1/2 z-20">
          <h1 className="text-4xl md:text-5xl mb-8 tracking-wide">
            <span className="text-sky-50">PAOLO</span>
            <span className="text-teal-400">JULIAN</span>
          </h1>
          <div className="jobs text-sky-50 tracking-wide text-md md:text-lg text-left">
            <h3>Full Stack Developer</h3>
            <h3>Producer</h3>
            <h3>Musician</h3>
            <h3>Gamer</h3>
          </div>
        </div>
        <Preloader />
        <div className={`parallax__layer parallax__layer__1`}>
          <StaticImage
            quality={90}
            className="h-full w-full"
            alt="Human"
            src="../images/parallax/parallax__1.png"
          />
        </div>
        <div className={`parallax__layer parallax__layer__7`}>
          <StaticImage
            quality={90}
            className="h-full w-full"
            alt="Human"
            src="../images/parallax/parallax__2.png"
          />
        </div>
        <div className={`parallax__layer parallax__layer__9`}>
          <StaticImage
            quality={90}
            className="h-full w-full"
            alt="Human"
            src="../images/parallax/parallax__3.png"
          />
        </div>
        <div className={`parallax__layer parallax__layer__11`}>
          <StaticImage
            quality={75}
            className="h-full w-full"
            alt="Human"
            src="../images/parallax/parallax__0.png"
          />
        </div>
        <div className="parallax__cover z-50">
          {children}
        </div>
      </div>
    </section>
  )
}

export default Landing
