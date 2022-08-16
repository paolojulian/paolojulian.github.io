import { motion } from "framer-motion"
import { graphql, useStaticQuery } from "gatsby"
import React, { FunctionComponent } from "react"

import { fadeInVariant } from "../../../@animations"
import { JobSkill } from "../../../@types/enums"
import AppIcon from "../../atoms/AppIcon"
import Heading from "../../atoms/Heading"
import ProgressBar from "../../atoms/ProgressBar"

export interface SoftSkillsProps {}

const SoftSkills: FunctionComponent<SoftSkillsProps> = props => {
  const {
    contentfulPortfolio,
  }: { contentfulPortfolio: { softSkills: JobSkill[] } } = useStaticQuery(
    graphql`
      query {
        contentfulPortfolio {
          softSkills {
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
      <div
        id="softSkills"
        className="flex flex-row-reverse md:flex-row items-center mb-6"
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-anchor="#hardSkills"
      >
        <AppIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </AppIcon>

        <Heading>Soft Skills</Heading>
      </div>

      <motion.div
        variants={fadeInVariant({ staggerChildren: 0.1 })}
        className="flex flex-col items-stretch text-gray-50 text-sm"
      >
        {contentfulPortfolio.softSkills.map((skill, i) => (
          <motion.div key={skill.id} variants={fadeInVariant()}>
            <ProgressBar
              title={skill.key}
              fillPercentage={skill.value}
              data-aos-anchor="#softSkills"
            ></ProgressBar>
          </motion.div>
        ))}
      </motion.div>
    </>
  )
}

export default SoftSkills
