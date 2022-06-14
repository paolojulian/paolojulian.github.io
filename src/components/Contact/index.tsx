import React, { FunctionComponent } from "react"

import SocialIcon from "./SocialIcon"
import FacebookIcon from "../../images/svg/facebook-f-brands.inline.svg"
import InstagramIcon from "../../images/svg/instagram-brands.inline.svg"
import LinkedInIcon from "../../images/svg/linkedin-in-brands.inline.svg"
import SteamIcon from "../../images/svg/steam-brands.inline.svg"

export interface indexProps {}

const index: FunctionComponent<indexProps> = props => {
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
        <h1 className="section-title mb-4">CONTACT</h1>
        <div className="text-sky-900 mb-8">
          Have a question or want to work together?
        </div>
        <form className="w-96 max-w-8xl mx-auto mb-10" onSubmit={() => {}}>
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
          <button
            is="app-button"
            type="submit"
            className="app-button bg-teal-600 hover:bg-teal-700 inline-block py-2 text-gray-200 transition duration-200 w-full"
          >
            Submit
          </button>
        </form>
      </section>
      <div className="bg-black text-gray-400 py-14">
        <div className="flex w-full items-center justify-center pb-10">
          <SocialIcon>
            <FacebookIcon width={20} height={25} fill="#e2e8f0" />
          </SocialIcon>
          <SocialIcon>
            <InstagramIcon width={20} height={25} fill="#e2e8f0" />
          </SocialIcon>
          <SocialIcon>
            <LinkedInIcon width={20} height={25} fill="#e2e8f0" />
          </SocialIcon>
          <SocialIcon>Gi</SocialIcon>
          <SocialIcon>
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
