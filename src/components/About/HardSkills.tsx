import React, { FunctionComponent } from "react"
import ProgressBar from "../Tools/ProgressBar"

export interface SkillsProps {}

const Skills: FunctionComponent<SkillsProps> = props => {
  return (
    <>
      <div id="hardSkills" className="flex items-center mb-6" data-aos="fade-up">
        <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-gray-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </div>
        <h3 className="text-2xl ml-4 font-semibold leading-normal">Hard Skills</h3>
      </div>

      <div
        className="flex flex-col items-stretch text-gray-50 text-sm mb-4"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-anchor="#hardSkills"
      >
        <ProgressBar
          title="Front-End"
          fillPercentage={85}
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-anchor="#hardSkills"
        ></ProgressBar>

        <ProgressBar
          title="Back-End"
          fillPercentage={75}
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-anchor="#hardSkills"
        ></ProgressBar>

        <ProgressBar
          title="Mobile"
          fillPercentage={55}
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-anchor="#hardSkills"
        ></ProgressBar>

        <ProgressBar
          title="Styling"
          fillPercentage={45}
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-anchor="#hardSkills"
        ></ProgressBar>

        <ProgressBar
          title="UI/UX"
          fillPercentage={30}
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-anchor="#hardSkills"
        ></ProgressBar>
      </div>
    </>
  )
}

export default Skills
