import { StaticImage } from "gatsby-plugin-image"
import React, { FunctionComponent } from "react"
import Ideals from "./Ideals"
import HardSkills from "./HardSkills"
import SoftSkills from "./SoftSkills"

export interface IntroductionProps {}

const Introduction: FunctionComponent<IntroductionProps> = props => {
  return (
    <section title="About Me" id="about" className="py-32 bg-slate-800">
      <div className="container max-w-screen-lg mx-auto">
        <div className="section-title mb-24">
          About
          <div className="pt-4 mx-auto w-32 border-b-4 border-sky-100"></div>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-center mx-auto">
          <div className="flex flex-col items-center justify-center mx-auto mb-24 md:mb-0">
            <div className="select-none rounded-full overflow-hidden border-2 border-sky-300 h-80 w-80">
              <StaticImage src="../../images/profile.jpg" alt="Profile" />
            </div>
            <div className="max-w-md text-center mt-4">
              <p className="text-center text-lg font-semibold">
                WHO IS THIS GUY?
              </p>
              <p className="ml-6">
                He is a Software Engineer for Yondu. He does a lot of javascript
                and front-end coding. He is a fast learner due to his serious
                passion for programming and wanting to contribute something good
                to any codebase.
              </p>
              <p className="text-orange-300 underline">
                <a href="#contact">Let's make something special</a>
              </p>
            </div>
          </div>
          <div className="text-left w-full md:w-6/12 px-4 mx-auto">
            <HardSkills />
            <SoftSkills />
          </div>
        </div>
        <Ideals />
      </div>
    </section>
  )
}

export default Introduction
