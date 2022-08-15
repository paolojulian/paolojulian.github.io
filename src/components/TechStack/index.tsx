import { motion } from "framer-motion"
import { StaticImage } from "gatsby-plugin-image"
import React, { FunctionComponent } from "react"
import {
  enterFromBottomVariant,
  rotateFromRightVariant
} from "../../@animations"
import DoubleRightIcon from "../../images/svg/angle-double-right-solid.inline.svg"
import DraftingIcon from "../../images/svg/drafting-compass-solid.inline.svg"
import { AppIconMotion } from "../atoms/AppIcon"
import AppPill from "../Tools/AppPill"
import TechCard from "../Tools/TechCard"

export interface indexProps {}

const index: FunctionComponent<indexProps> = props => {
  return (
    <section className="relative bg-slate-900">
      <div className="h-20 bg-slate-800 bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20">
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-slate-900 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div className="max-w-screen-xl mx-auto">
        <div id="techStack" className="flex flex-wrap items-center text-left">
          <div className="w-full md:w-6/12 px-4 mr-auto ml-auto -mt-36">
            <motion.ul
              initial="invisible"
              whileInView="visible"
              viewport={{ once: true }}
              variants={enterFromBottomVariant({ staggerChildren: 0.2 })}
              className="justify-center flex flex-wrap relative"
            >
              <motion.li
                variants={enterFromBottomVariant()}
                className="my-4 w-full lg:w-6/12 px-4 lg:mt-16"
              >
                <TechCard
                  className="bg-sky-500 bg-opacity-95 mt-8"
                  title="Mobile"
                  description="
            Experienced in creating lifestyle, travel, utility and business
            applications. Mostly includes the use of google maps and stripe
            payment
                  "
                  icon={
                    <StaticImage alt="Mobile" src="../../images/mobile.png" />
                  }
                  data-aos="fade-up"
                  data-aos-anchor="#techStack"
                  data-aos-delay="200"
                  data-aos-duration="800"
                />
              </motion.li>
              <motion.li
                variants={enterFromBottomVariant({ staggerChildren: 0.3 })}
                className="my-4 w-full lg:w-6/12 px-4"
              >
                <motion.div variants={enterFromBottomVariant()}>
                  <TechCard
                    className="bg-orange-400"
                    title="Web"
                    description="
            Mostly developed management systems, ordering applications and
            entertainment websites.
                  "
                    icon={<StaticImage alt="Web" src="../../images/web.png" />}
                    data-aos="fade-up"
                    data-aos-anchor="#techStack"
                    data-aos-duration="800"
                  />
                </motion.div>
                <motion.div variants={enterFromBottomVariant()}>
                  <TechCard
                    className="bg-pink-500 my-8"
                    title="DevOPS"
                    description="Experience in AWS, Heroku, and Firebase."
                    icon={<StaticImage alt="Web" src="../../images/aws.png" />}
                    data-aos="fade-up"
                    data-aos-anchor="#techStack"
                    data-aos-delay="400"
                    data-aos-duration="800"
                  />
                </motion.div>
              </motion.li>
            </motion.ul>
          </div>

          <motion.div
            initial="invisible"
            whileInView="visible"
            viewport={{ once: true }}
            variants={enterFromBottomVariant({ staggerChildren: 0.3 })}
            className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto"
          >
            <AppIconMotion
              variants={enterFromBottomVariant()}
              className="mb-6"
              size="lg"
            >
              <DraftingIcon width={30} fill="#ffffff" />
            </AppIconMotion>

            <motion.h3
              variants={enterFromBottomVariant()}
              className="text-3xl mb-2 font-semibold leading-normal"
              data-aos="fade-up"
            >
              Tech stack
            </motion.h3>
            <motion.p
              variants={enterFromBottomVariant()}
              className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600"
              data-aos="fade-up"
            >
              Here is a list of my most used languages, frameworks and libraries
              up to date. I am still continuously learning new and better ways
              to provide the needs of end users.
            </motion.p>
            <motion.ul
              variants={enterFromBottomVariant({ staggerChildren: 0.1 })}
              className="block pb-6"
              data-aos="fade-up"
            >
              <motion.li
                variants={enterFromBottomVariant()}
                className="inline mr-2"
              >
                <AppPill>VueJS 2</AppPill>
              </motion.li>
              <motion.li
                variants={enterFromBottomVariant()}
                className="inline mr-2"
              >
                <AppPill>VueJS 3</AppPill>
              </motion.li>
              <motion.li
                variants={enterFromBottomVariant()}
                className="inline mr-2"
              >
                <AppPill>ReactJS</AppPill>
              </motion.li>
              <motion.li
                variants={enterFromBottomVariant()}
                className="inline mr-2"
              >
                <AppPill>NextJS</AppPill>
              </motion.li>
              <motion.li
                variants={enterFromBottomVariant()}
                className="inline mr-2"
              >
                <AppPill>Laravel</AppPill>
              </motion.li>
              <motion.li
                variants={enterFromBottomVariant()}
                className="inline mr-2"
              >
                <AppPill>NodeJS</AppPill>
              </motion.li>
              <motion.li
                variants={rotateFromRightVariant()}
                className="inline mr-2"
              >
                <AppPill>Gatsby</AppPill>
              </motion.li>
            </motion.ul>
            <motion.div variants={enterFromBottomVariant()}>
              <a
                className="font-bold bg-pink-400 py-2 px-5 rounded-3xl text-white hover:opacity-75 ease-linear transition-opacity duration-150 animate-pulse hover:animate-none"
                href="https://stackshare.io/paolovincentarch/my-stack"
                target="__blank"
                data-aos="fade-up"
              >
                View all{" "}
                <DoubleRightIcon
                  height={20}
                  fill="white"
                  className="ml-2 inline"
                />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default index
