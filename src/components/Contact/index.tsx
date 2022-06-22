import React, { FunctionComponent } from "react"
import { motion } from "framer-motion"

import SocialIcon from "./SocialIcon"
import FacebookIcon from "../../images/svg/facebook-f-brands.inline.svg"
import InstagramIcon from "../../images/svg/instagram-brands.inline.svg"
import GithubIcon from "../../images/svg/github.inline.svg"
import LinkedInIcon from "../../images/svg/linkedin-in-brands.inline.svg"
import SteamIcon from "../../images/svg/steam-brands.inline.svg"
import { bounceInVariant, enterFromLeftVariant } from "../../@animations"
import SpringyButton from "../Tools/SpringyButton"
import { graphql, useStaticQuery } from "gatsby"
import { ContentfulRepeater } from "../../@types/enums"

export interface indexProps {}

const index: FunctionComponent<indexProps> = props => {
  const handleSubmitContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  const {
    contentfulPortfolio,
  }: { contentfulPortfolio: { socialMediaAccounts: ContentfulRepeater[] } } =
    useStaticQuery(
      graphql`
        query {
          contentfulPortfolio {
            socialMediaAccounts {
              id
              key
              value
            }
          }
        }
      `
    )

  const getSocialMediaLink = React.useCallback(
    (socialMediaKey: string) => {
      return contentfulPortfolio.socialMediaAccounts.find(
        ({ key }) => key === socialMediaKey
      )?.value
    },
    [contentfulPortfolio]
  )

  return (
    <footer className="text-center bg-slate-200 min-h-screen flex flex-col justify-between relative">
      <div className="h-20 bg-slate-200 bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20">
        <svg
          className="h-20 relative block w-full"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
        >
          <path
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            className="text-slate-900 fill-current"
          ></path>
        </svg>
      </div>
      <section
        id="contact"
        className="text-black text-center my-auto py-10 md:py-0"
      >
        <motion.div
          initial="invisible"
          whileInView="visible"
          viewport={{ once: true }}
          variants={enterFromLeftVariant({ staggerChildren: 0.4 })}
        >
          <motion.h1
            variants={enterFromLeftVariant()}
            className="section-title"
          >
            CONTACT
          </motion.h1>
          <motion.div className="pt-4 mx-auto w-24 mb-8 border-b-4 border-black"></motion.div>
        </motion.div>
        <motion.div
          initial="invisible"
          whileInView="visible"
          viewport={{ once: true }}
          variants={bounceInVariant()}
          className="text-sky-900 mb-8"
        >
          Have a question or want to work together?
        </motion.div>
        <motion.form
          initial="invisible"
          whileInView="visible"
          variants={bounceInVariant({ delay: 0.75 })}
          viewport={{ once: true }}
          className="w-96 max-w-8xl mx-auto mb-10"
          onSubmit={handleSubmitContact}
        >
          <div className="form-group">
            <input
              autoComplete="on"
              id="name"
              name="name"
              placeholder="Name"
              type="text"
            />
          </div>
          <div className="form-group">
            <input
              autoComplete="on"
              id="email"
              name="email"
              placeholder="Email"
              type="text"
            />
          </div>
          <div className="form-group">
            <textarea
              className="resize-none"
              id="message"
              name="message"
              placeholder="Message"
              rows={8}
            ></textarea>
          </div>
          <SpringyButton
            className="w-full uppercase font-semibold"
            type="submit"
          >
            Submit
          </SpringyButton>
        </motion.form>
      </section>
      <div className="bg-black text-gray-400 py-14">
        <div className="flex w-full items-center justify-center pb-10">
          <SocialIcon href={getSocialMediaLink("facebook")}>
            <FacebookIcon width={20} height={25} fill="#e2e8f0" />
          </SocialIcon>
          <SocialIcon href={getSocialMediaLink('instagram')}>
            <InstagramIcon width={20} height={25} fill="#e2e8f0" />
          </SocialIcon>
          <SocialIcon href={getSocialMediaLink('linkedin')}>
            <LinkedInIcon width={20} height={25} fill="#e2e8f0" />
          </SocialIcon>
          <SocialIcon href={getSocialMediaLink('github')}>
            <GithubIcon width={20} height={25} fill="#e2e8f0" />
          </SocialIcon>
          <SocialIcon href={getSocialMediaLink('steam')}>
            <SteamIcon width={20} height={25} fill="#e2e8f0" />
          </SocialIcon>
        </div>
        <div className="text-gray-500">
          PAOLO VINCENT JULIAN <span className="text-pink-400">©2017</span>
        </div>
      </div>
    </footer>
  )
}

export default index
