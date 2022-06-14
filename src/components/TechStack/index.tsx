import { StaticImage } from "gatsby-plugin-image"
import React, { FunctionComponent } from "react"
import TechCard from "../Tools/TechCard"
import DraftingCompassSolid from '../../images/svg/drafting-compass-solid.inline.svg';
import AppPill from "../Tools/AppPill";

export interface indexProps {}

const index: FunctionComponent<indexProps> = props => {
  return (
    <section className="relative bg-slate-900 pb-16">
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
        {/* <m8odule href="/components/about/stories/tech-stack.html"></module> */}
        <div id="techStack" className="flex flex-wrap items-center text-left">
          <div className="w-full md:w-6/12 px-4 mr-auto ml-auto -mt-36">
            <div className="justify-center flex flex-wrap relative">
              <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
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
              </div>
              <div className="my-4 w-full lg:w-6/12 px-4">
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
              </div>
            </div>
          </div>
          <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto">
            <div
              className="text-gray-500 bg-gray-50 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full"
              data-aos="fade-up"
            >
              <DraftingCompassSolid fill="#0f172a" />
            </div>
            <h3
              className="text-3xl mb-2 font-semibold leading-normal"
              data-aos="fade-up"
            >
              Tech stack
            </h3>
            <p
              className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600"
              data-aos="fade-up"
            >
              Here is a list of my most used languages, frameworks and libraries
              up to date. I am still continuously learning new and better ways
              to provide the needs of end users.
            </p>
            <div className="block pb-6" data-aos="fade-up">
              <AppPill>VueJS 2</AppPill>
              <AppPill>VueJS 3</AppPill>
              <AppPill>ReactJS</AppPill>
              <AppPill>NextJS</AppPill>
              <AppPill>Gatsby</AppPill>
              <AppPill>Laravel</AppPill>
              <AppPill>NodeJS</AppPill>
            </div>
            <div>
              <a
                className="font-bold text-red hover:opacity-75 ease-linear transition-opacity duration-150 animate-pulse hover:animate-none"
                href="https://stackshare.io/paolovincentarch/my-stack"
                target="__blank"
                data-aos="fade-up"
              >
                View all{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default index
