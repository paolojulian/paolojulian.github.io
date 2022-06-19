import { graphql, useStaticQuery } from "gatsby"
import React, { FunctionComponent } from "react"
import { motion } from "framer-motion"

import ProgressBar from "../Tools/ProgressBar"
import { JobSkill } from "../../@types/enums"
import { fadeInVariant } from "../../@animations"

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
        id="softSkills"
        className="flex flex-row-reverse md:flex-row items-center mb-6"
        data-aos="fade-up"
        data-aos-delay="600"
        data-aos-anchor="#hardSkills"
      >
        <div className="text-sky-50 p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-400">
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
        </div>
        <h3 className="text-2xl mx-4 font-semibold leading-normal">
          Soft Skills
        </h3>
      </div>

      <motion.div
        variants={fadeInVariant({ staggerChildren: 0.1 })}
        className="flex flex-col items-stretch text-gray-50 text-sm"
      >
        {contentfulPortfolio.softSkills.map((skill, i) => (
          <motion.div key={skill.id} variants={fadeInVariant()}>
            <ProgressBar
              title={skill.name}
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
