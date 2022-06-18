import { graphql, useStaticQuery } from "gatsby"
import React, { FunctionComponent } from "react"
import { JobSkill } from "../../@types/enums"
import ProgressBar from "../Tools/ProgressBar"

export interface SkillsProps {}

const Skills: FunctionComponent<SkillsProps> = props => {
  const {
    contentfulPortfolio,
  }: { contentfulPortfolio: { hardSkills: JobSkill[] } } = useStaticQuery(
    graphql`
      query {
        contentfulPortfolio {
          hardSkills {
            id
            name
            value
          }
        }
      }
    `
  )
  return (
    <>
      <div
        id="hardSkills"
        className="flex flex-row-reverse md:flex-row items-center mb-6"
        data-aos="fade-up"
      >
        <div className="text-sky-50 p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </div>
        <h3 className="text-2xl mx-4 font-semibold leading-normal">
          Hard Skills
        </h3>
      </div>

      <div
        className="flex flex-col items-stretch text-gray-50 text-sm mb-4"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-anchor="#hardSkills"
      >
        {contentfulPortfolio.hardSkills.map((skill, i) => (
          <ProgressBar
            title={skill.name}
            fillPercentage={skill.value}
            data-aos="fade-up"
            data-aos-delay={i * 100 + 100}
            data-aos-anchor="#hardSkills"
          ></ProgressBar>
        ))}
      </div>
    </>
  )
}

export default Skills
