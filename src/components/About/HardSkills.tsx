import { graphql, useStaticQuery } from "gatsby"
import { AnimationProps, motion } from "framer-motion"
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
      <div className="flex flex-row-reverse md:flex-row items-center mb-6">
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

      <motion.div className="flex flex-col items-stretch text-gray-50 text-sm mb-4">
        {contentfulPortfolio.hardSkills.map((skill, i) => (
          <motion.div
            key={skill.id}
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
          >
            <ProgressBar
              title={skill.name}
              fillPercentage={skill.value}
            ></ProgressBar>
          </motion.div>
        ))}
      </motion.div>
    </>
  )
}

export default Skills
