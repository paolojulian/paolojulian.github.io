import { StaticImage } from "gatsby-plugin-image"
import React, { FunctionComponent, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import Ideals from "./Ideals"
import HardSkills from "./HardSkills"
import SoftSkills from "./SoftSkills"
import { graphql, useStaticQuery } from "gatsby"
import SpringyButton from "../Tools/SpringyButton"
import { useInView } from "react-intersection-observer"
import { enterFromLeftVariant, enterFromRightVariant } from "../../@animations"

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
  const aboutControls = useAnimation()
  const [aboutRef, inViewAbout] = useInView({
    threshold: 0.5,
    triggerOnce: true,
    delay: 0.5,
  })
  const [ref, inView] = useInView({ threshold: 1, triggerOnce: true })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])
  useEffect(() => {
    if (inViewAbout) {
      aboutControls.start("visible")
    }
  }, [aboutControls, inViewAbout])

  return (
    <section title="About Me" id="about" className="py-32 bg-slate-800">
      <div className="container max-w-screen-lg mx-auto">
        <motion.ul
          animate={aboutControls}
          initial="invisible"
          variants={enterFromLeftVariant({ staggerChildren: 0.5 })}
          className="section-title mb-24"
        >
          <motion.li variants={enterFromLeftVariant()}>About</motion.li>
          <motion.li
            variants={enterFromLeftVariant()}
            className="pt-4 mx-auto w-24 border-b-4 border-sky-100"
          ></motion.li>
        </motion.ul>

        <div ref={aboutRef}></div>

        <Ideals />

        <div className="flex flex-col md:flex-row items-start justify-center mx-auto mb-36">
          {/* Who is this guy */}
          <motion.div
            animate={controls}
            initial="invisible"
            variants={enterFromLeftVariant()}
            className="flex flex-col items-center justify-center mx-auto mb-24 md:mb-0"
          >
            <div className="select-none rounded-full overflow-hidden border-2 border-sky-300 h-80 w-80">
              <StaticImage src="../../images/profile.jpg" alt="Profile" />
            </div>
            <div className="max-w-md text-center mt-4">
              <p className="mb-4 text-center text-lg font-semibold">
                WHO IS THIS GUY?
              </p>
              <p className="ml-6 mb-4">{contentfulPortfolio.description}</p>
              <div ref={ref}>
                <SpringyButton
                  onClick={() => (window.location.href = "#contact")}
                >
                  Let's make something special
                </SpringyButton>
              </div>
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
      </div>
    </section>
  )
}

export default Introduction
