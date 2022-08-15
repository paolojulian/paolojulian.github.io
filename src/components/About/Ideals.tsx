import { motion, useAnimation } from "framer-motion"
import React, { FunctionComponent, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { fadeInVariant, rotateFromRightVariant } from "../../@animations"
import { AppIconMotion } from "../atoms/AppIcon"

export interface IdealsProps {}

const Ideals: FunctionComponent<IdealsProps> = props => {
  const controls = useAnimation()
  const [bottomRef, inViewBottom] = useInView()
  useEffect(() => {
    if (inViewBottom) {
      controls.start("visible")
    }
  }, [inViewBottom, controls])
  return (
    <>
      <motion.ul
        animate={controls}
        initial="invisible"
        variants={fadeInVariant({ staggerChildren: 0.3 })}
        className="flex flex-wrap justify-center items-start my-24 text-center"
      >
        <motion.li
          variants={fadeInVariant()}
          id="serviceFast"
          className="flex flex-col items-center justify-center px-4 w-6/12 md:w-1/4 mb-4"
        >
          <AppIconMotion
            className="mb-4"
            variants={rotateFromRightVariant()}
            size="lg"
          >
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
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </AppIconMotion>

          <motion.div variants={fadeInVariant()}>
            <div className="text-2xl mb-2 font-bold">Fast</div>
            <div>Fast load times and lag free interaction.</div>
          </motion.div>
        </motion.li>

        <motion.li
          variants={fadeInVariant()}
          id="serviceResponsive"
          className="flex flex-col items-center justify-center px-4 w-6/12 md:w-1/4 mb-4"
        >
          <AppIconMotion
            className="mb-4"
            size="lg"
            variants={rotateFromRightVariant()}
          >
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
                d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </AppIconMotion>
          <div className="text-2xl mb-2 font-bold">Responsive</div>
          <div
            data-aos="fade-right"
            data-aos-anchor="#serviceResponsive"
            data-aos-delay="700"
          >
            Layouts should always work on any device, big or small.
          </div>
        </motion.li>

        <motion.li
          variants={fadeInVariant()}
          id="serviceMaintainable"
          className="flex flex-col items-center justify-center px-4 w-6/12 md:w-1/4 mb-4"
        >
          <AppIconMotion
            variants={rotateFromRightVariant()}
            className="mb-4"
            size="lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
            </svg>
          </AppIconMotion>

          <div
            className="text-2xl mb-2 font-bold"
            data-aos="fade-left"
            data-aos-anchor="#serviceMaintainable"
            data-aos-delay="600"
          >
            Maintainable
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor="#serviceMaintainable"
            data-aos-delay="900"
          >
            One of the most underrated parts of programming, but it is one of
            the most important things that I consider.
          </div>
        </motion.li>

        <motion.li
          variants={fadeInVariant()}
          id="serviceSimple"
          className="flex flex-col items-center justify-center px-4 w-6/12 md:w-1/4 mb-4"
        >
          <AppIconMotion
            className="mb-4"
            size="lg"
            variants={rotateFromRightVariant()}
          >
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </AppIconMotion>

          <div
            className="text-2xl mb-2 font-bold"
            data-aos="fade-left"
            data-aos-anchor="#serviceSimple"
            data-aos-delay="800"
          >
            Simple
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor="#serviceSimple"
            data-aos-delay="1100"
          >
            Keeping things simple and consice, may it be design-wise or
            code-wise.
          </div>
        </motion.li>
      </motion.ul>
      <div ref={bottomRef}></div>
    </>
  )
}

export default Ideals
