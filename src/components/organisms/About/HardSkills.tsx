import { AnimationProps, motion } from "framer-motion"
import { graphql, useStaticQuery } from "gatsby"
import React, { FunctionComponent } from "react"
import { fadeInVariant } from "../../../@animations"
import { JobSkill } from "../../../@types/enums"
import AppIcon from "../../atoms/AppIcon"
import Heading from "../../atoms/Heading"
import ProgressBar from "../../atoms/ProgressBar"

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
            key
            value
          }
        }
      }
    `
  )

  return (
    <>
      <div className="flex flex-row-reverse md:flex-row items-center mb-6">
        <AppIcon>
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
        </AppIcon>

        <Heading>Hard Skills</Heading>
      </div>

      <motion.div
        variants={fadeInVariant({ staggerChildren: 0.1 })}
        className="flex flex-col items-stretch text-gray-50 text-sm mb-4"
      >
        {contentfulPortfolio.hardSkills.map((skill, i) => (
          <motion.div key={skill.id} variants={fadeInVariant()}>
            <ProgressBar
              title={skill.key}
              fillPercentage={skill.value}
            ></ProgressBar>
          </motion.div>
        ))}
      </motion.div>
    </>
  )
}

export default Skills
