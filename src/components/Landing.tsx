import { StaticImage } from "gatsby-plugin-image"
import React, { FC, ReactNode } from "react"

import "./Landing.scss"
import Preloader from "./Preloader"

type LandingProps = {
  children: ReactNode
}

const Landing: FC<LandingProps> = ({ children }) => {
  return (
    <section id="top" className="position-relative h-screen bg-stone-900">
      <div className="parallax">
        {/* Paolo Julian */}
        <div className={`parallax__layer parallax__layer__1`}>
          <StaticImage
            quality={90}
            className="h-full w-full"
            alt="Human"
            src="../images/parallax/parallax__8.png"
          />
        </div>
        <div className={`parallax__layer parallax__layer__2`}>
          <StaticImage
            quality={90}
            className="h-full w-full"
            alt="Human"
            src="../images/parallax/parallax__7.png"
          />
        </div>
        <div className={`parallax__layer parallax__layer__3`}>
          <StaticImage
            quality={90}
            className="h-full w-full"
            alt="Human"
            src="../images/parallax/parallax__6.png"
          />
        </div>
        <div className={`parallax__layer parallax__layer__4`}>
          <StaticImage
            quality={90}
            className="h-full w-full"
            alt="Human"
            src="../images/parallax/parallax__5.png"
          />
        </div>
        <div className={`parallax__layer parallax__layer__5`}>
          <StaticImage
            quality={90}
            className="h-full w-full"
            alt="Human"
            src="../images/parallax/parallax__4.png"
          />
        </div>
        <div className={`parallax__layer parallax__layer__6`}>
          <StaticImage
            quality={90}
            className="h-full w-full"
            alt="Human"
            src="../images/parallax/parallax__3.png"
          />
        </div>
        <div className="parallax__layer parallax__layer__6">
          <div className="max-w-screen-xl mx-auto h-full w-full flex items-center justify-center">
            <div className="flex-1 text-3xl">
              <h1 className="text-4xl md:text-5xl mb-8 font-portica text-center">
                <span className="text-sky-50">PAOLO</span>
                <span className="text-black">JULIAN</span>
              </h1>
              {/* <div className="jobs text-sky-50 tracking-wide text-md md:text-lg text-left">
                <h3>Full Stack Developer</h3>
                <h3>Producer</h3>
                <h3>Musician</h3>
                <h3>Gamer</h3>
              </div> */}
            </div>
          </div>
        </div>
        <div className={`parallax__layer parallax__layer__7`}>
          <StaticImage
            quality={90}
            className="h-full w-full"
            alt="Human"
            src="../images/parallax/parallax__2.png"
          />
        </div>
        <div className={`parallax__layer parallax__layer__8`}>
          <StaticImage
            quality={90}
            className="h-full w-full"
            alt="Human"
            src="../images/parallax/parallax__1.png"
          />
        </div>
        <div className={`parallax__base z-30`}>
          <StaticImage
            quality={75}
            className="h-full w-full"
            alt="Human"
            src="../images/parallax/parallax__0.png"
          />
        </div>
        <div className={`parallax__layer parallax__layer__3`}>
          <Preloader />
        </div>
        <div className="parallax__cover z-50">{children}</div>
      </div>
    </section>
  )
}

export default Landing
