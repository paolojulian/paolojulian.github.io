import React, { FunctionComponent } from "react"
import ProgressBar from "../Tools/ProgressBar"

export interface SoftSkillsProps {}

const SoftSkills: FunctionComponent<SoftSkillsProps> = props => {
  return (
    <>
      <div
        id="softSkills"
        className="flex items-center mb-6"
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-anchor="#hardSkills"
      >
        <div className="text-sky-50 p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-400">
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
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <h3 className="text-2xl ml-4 font-semibold leading-normal">Soft Skills</h3>
      </div>

      <div className="flex flex-col items-stretch text-gray-50 text-sm">
        <ProgressBar
          title="Communication"
          fillPercentage={70}
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-anchor="#hardSkills"
        ></ProgressBar>

        <ProgressBar
          title="Fast Learner"
          fillPercentage={90}
          data-aos="fade-up"
          data-aos-delay="700"
          data-aos-anchor="#hardSkills"
        ></ProgressBar>

        <ProgressBar
          title="Management"
          fillPercentage={50}
          data-aos="fade-up"
          data-aos-delay="800"
          data-aos-anchor="#hardSkills"
        ></ProgressBar>

        <ProgressBar
          title="Team Work"
          fillPercentage={90}
          data-aos="fade-up"
          data-aos-delay="900"
          data-aos-anchor="#hardSkills"
        ></ProgressBar>
      </div>
    </>
  )
}

export default SoftSkills
