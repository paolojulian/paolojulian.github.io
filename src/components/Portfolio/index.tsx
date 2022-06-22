import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import React, { FunctionComponent } from "react"
import PortfolioCardMotion from "./PortfolioCard"
import {
  enterFromBottomVariant,
  enterFromRightVariant,
} from "../../@animations"
import PortfolioModal from "./PortfolioModal"
import { graphql, useStaticQuery } from "gatsby"
import { PortfolioItem } from "../../@types/enums"

export interface indexProps {}

type allContentfulPortfolioItem = {
  allContentfulPortfolioItem: {
    edges: [
      {
        node: PortfolioItem
      }
    ]
  }
}

const index: FunctionComponent<indexProps> = props => {
  const { allContentfulPortfolioItem } =
    useStaticQuery<allContentfulPortfolioItem>(
      graphql`
        query {
          allContentfulPortfolioItem(
            sort: { fields: [updatedAt], order: ASC }
          ) {
            edges {
              node {
                id
                title
                description {
                  description
                }
                stack
                thumbnail {
                  gatsbyImage(layout: CONSTRAINED, width: 400, height: 300)
                  id
                  url
                }
              }
            }
          }
        }
      `
    )

  const [isLearnMoreModalOpen, setLearnMoreModalOpen] = React.useState(false)
  const [selectedPortfolioItem, setSelectedPortfolioItem] = React.useState<PortfolioItem>()
  const onLearnMore = (portfolioItem: PortfolioItem) => {
    setSelectedPortfolioItem(portfolioItem)
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
          {allContentfulPortfolioItem.edges.map(({ node }) => (
            <PortfolioCardMotion
              key={node.id}
              variants={enterFromBottomVariant()}
              name={node.title}
              stack={node.stack}
              onLearnMore={() => onLearnMore(node)}
              Image={
                <GatsbyImage
                  alt={node.title}
                  image={node.thumbnail.gatsbyImage}
                ></GatsbyImage>
              }
            />
          ))}
        </motion.div>
      </section>
      <PortfolioModal
        isOpen={isLearnMoreModalOpen}
        onClose={() => setLearnMoreModalOpen(false)}
        item={selectedPortfolioItem}
      />
    </>
  )
}

export default index
