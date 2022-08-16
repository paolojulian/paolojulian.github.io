import { motion, useAnimation } from "framer-motion"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React, { FunctionComponent, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { enterFromLeftVariant, enterFromRightVariant } from "../../../@animations"
import SectionTitle from "../../atoms/SectionTitle"
import SpringyButton from "../../atoms/SpringyButton"
import HardSkills from "./HardSkills"
import Ideals from "./Ideals"
import SoftSkills from "./SoftSkills"

export interface IntroductionProps {}

const Introduction: FunctionComponent<IntroductionProps> = props => {
  const { contentfulPortfolio } = useStaticQuery(
    graphql`
      query {
        contentfulPortfolio {
          description
        }
      }
    `
  )

  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 1, triggerOnce: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
      console.log("test")
    }
  }, [controls, inView])

  return (
    <section title="About Me" id="about" className="py-32 bg-slate-800">
      <div className="container max-w-screen-lg mx-auto">
        <SectionTitle>About</SectionTitle>

        <Ideals />

        <div className="flex flex-col md:flex-row items-start justify-center mx-auto">
          {/* Who is this guy */}
          <motion.div
            animate={controls}
            initial="invisible"
            variants={enterFromLeftVariant()}
            className="flex flex-col items-center justify-center mx-auto mb-24 md:mb-0"
          >
            <div className="select-none rounded-full overflow-hidden border-2 border-sky-300 h-80 w-80">
              <StaticImage src="../../../images/profile.jpg" alt="Profile" />
            </div>
            <div className="max-w-md text-center mt-4">
              <p className="mb-5 text-center text-lg font-semibold">
                WHO IS THIS GUY?
              </p>
              <p className="ml-6 mb-8">{contentfulPortfolio.description}</p>
              <SpringyButton
                onClick={() => (window.location.href = "#contact")}
              >
                Let's make something special
              </SpringyButton>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            animate={controls}
            initial="invisible"
            variants={enterFromRightVariant()}
            className="text-left w-full md:w-6/12 px-4 mx-auto"
          >
            <HardSkills />
            <SoftSkills />
          </motion.div>
        </div>
        <div className="mb-36" ref={ref}></div>
      </div>
    </section>
  )
}

export default Introduction
