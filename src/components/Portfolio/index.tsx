import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import React, { FunctionComponent } from "react"
import PortfolioCardMotion from "./PortfolioCard"
import {
  enterFromBottomVariant,
  enterFromRightVariant,
} from "../../@animations"
import PortfolioModal from "./PortfolioModal"

export interface indexProps {}

const index: FunctionComponent<indexProps> = props => {
  const [isLearnMoreModalOpen, setLearnMoreModalOpen] = React.useState(false)
  const onLearnMore = () => {
    setLearnMoreModalOpen(true)
  }

  return (
    <>
      <section
        id="portfolio"
        className="justify-center text-center flex flex-wrap pt-32 pb-64 bg-slate-900"
      >
        <motion.div className="w-full md:w-6/12 px-12 md:px-4">
          <motion.h2
            initial="invisible"
            whileInView="visible"
            viewport={{ once: true }}
            variants={enterFromRightVariant({ staggerChildren: 0.5 })}
            className="section-title mb-12"
          >
            <motion.div variants={enterFromRightVariant()}>
              Portfolio
            </motion.div>
            <motion.div
              variants={enterFromRightVariant()}
              className="pt-4 mx-auto w-32 border-b-4 border-sky-100"
            ></motion.div>
          </motion.h2>
          <motion.p
            initial="invisible"
            whileInView="visible"
            viewport={{ once: true }}
            variants={enterFromBottomVariant()}
            className="text-lg leading-relaxed mt-4 mb-4 text-sky-100"
          >
            These are some of the personal and professional projects i have done
            or collabed with in the past.
          </motion.p>
        </motion.div>

        <motion.div
          initial="invisible"
          whileInView="visible"
          variants={enterFromBottomVariant({ staggerChildren: 0.2 })}
          viewport={{ once: true }}
          className="flex flex-wrap max-w-screen-xl mx-auto justify-center"
        >
          <PortfolioCardMotion
            variants={enterFromBottomVariant()}
            name="Barter App"
            stack="React Native & ExpressJS"
            onLearnMore={onLearnMore}
            Image={
              <StaticImage
                alt="barter"
                src="../../images/portfolio/barter.png"
                quality={90}
              />
            }
          />
          <PortfolioCardMotion
            variants={enterFromBottomVariant()}
            name="Asta"
            stack="Laravel 7 & VanillaJS"
            onLearnMore={onLearnMore}
            Image={
              <StaticImage
                alt="asta"
                src="../../images/portfolio/asta.png"
                quality={90}
              />
            }
          />
          <PortfolioCardMotion
            name="Interactive Comments Section"
            stack="NextJS"
            variants={enterFromBottomVariant()}
            onLearnMore={onLearnMore}
            Image={
              <StaticImage
                alt="ArtFX"
                src="../../images/portfolio/interactive-comments-section.png"
                quality={90}
              />
            }
          />
          <PortfolioCardMotion
            name="Lacosina"
            stack="ReactJS & ExpressJS"
            variants={enterFromBottomVariant()}
            onLearnMore={onLearnMore}
            Image={
              <StaticImage
                alt="lacosina"
                src="../../images/portfolio/lacosina.png"
                quality={90}
              />
            }
          />
          <PortfolioCardMotion
            name="Hirano Web Order"
            stack="CakePHP 3 & VueJS"
            variants={enterFromBottomVariant()}
            onLearnMore={onLearnMore}
            Image={
              <StaticImage
                alt="hirano"
                src="../../images/portfolio/hirano_order.png"
                quality={90}
              />
            }
          />
          <PortfolioCardMotion
            name="Pass Team"
            stack="Laravel 7 & VueJS"
            variants={enterFromBottomVariant()}
            onLearnMore={onLearnMore}
            Image={
              <StaticImage
                alt="passteam"
                src="../../images/portfolio/passteam.png"
                quality={90}
              />
            }
          />
          <PortfolioCardMotion
            name="Sonomanmas-o"
            stack="Laravel 7 & VueJS"
            variants={enterFromBottomVariant()}
            onLearnMore={onLearnMore}
            Image={
              <StaticImage
                alt="sonomanmaso"
                src="../../images/portfolio/sonomanmaso.png"
                quality={90}
              />
            }
          />
          <PortfolioCardMotion
            name="Yeomans Soil App"
            stack="React Native & ExpressJS"
            variants={enterFromBottomVariant()}
            onLearnMore={onLearnMore}
            Image={
              <StaticImage
                alt="yeomans"
                src="../../images/portfolio/yeomans.png"
                quality={90}
              />
            }
          />
          <PortfolioCardMotion
            name="Rainbow CH"
            stack="CakePHP 2 & VanillaJS"
            variants={enterFromBottomVariant()}
            onLearnMore={onLearnMore}
            Image={
              <StaticImage
                alt="rainbow-blurred"
                src="../../images/portfolio/rainbow-blurred.png"
                quality={90}
              />
            }
          />
        </motion.div>
      </section>
      <PortfolioModal
        isOpen={isLearnMoreModalOpen}
        onClose={() => setLearnMoreModalOpen(false)}
      />
    </>
  )
}

export default index
