import { StaticImage } from "gatsby-plugin-image"
import React, { FunctionComponent } from "react"
import Ideals from "./Ideals"
import HardSkills from "./HardSkills"
import SoftSkills from "./SoftSkills"

export interface IntroductionProps {}

const Introduction: FunctionComponent<IntroductionProps> = props => {
  return (
    <section title="About Me" id="AboutMe" className="pt-32 max-w-screen-lg mx-auto">
      <div className="font-semibold italic text-4xl text-center text-green-600 mb-40">
        ## About ##
      </div>
      <div className="flex items-center justify-center mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="select-none rounded-full overflow-hidden border-2 border-stone-100 h-80 w-80">
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
        <div className="text-left w-full md:w-6/12 px-4 mr-auto ml-auto">
          <HardSkills />
          <SoftSkills />
        </div>
      </div>
      <Ideals />
    </section>
  )
}

export default Introduction
