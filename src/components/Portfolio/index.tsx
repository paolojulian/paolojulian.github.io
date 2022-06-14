import { StaticImage } from "gatsby-plugin-image"
import React, { FunctionComponent } from "react"
import PortfolioCard from "./PortfolioCard"

export interface indexProps {}

const index: FunctionComponent<indexProps> = props => {
  return (
    <section
      id="portfolio"
      className="justify-center text-center flex flex-wrap pt-32 pb-64 bg-slate-900"
    >
      <div className="w-full md:w-6/12 px-12 md:px-4">
        <h2 className="section-title mb-12">
          Portfolio
          <div className="pt-4 mx-auto w-32 border-b-4 border-sky-100"></div>
        </h2>
        <p className="text-lg leading-relaxed mt-4 mb-4 text-sky-100">
          These are some of the personal and professional projects i have done
          or collabed with in the past.
        </p>
      </div>

      <div className="flex flex-wrap max-w-screen-xl mx-auto justify-center">
        <PortfolioCard
          Image={
            <StaticImage
              alt="barter"
              src="../../images/portfolio/barter.png"
              quality={90}
            />
          }
        />
        <PortfolioCard
          Image={
            <StaticImage
              alt="asta"
              src="../../images/portfolio/asta.png"
              quality={90}
            />
          }
        />
        <PortfolioCard
          Image={
            <StaticImage
              alt="ArtFX"
              src="../../images/portfolio/artfx.png"
              quality={90}
            />
          }
        />
        <PortfolioCard
          Image={
            <StaticImage
              alt="lacosina"
              src="../../images/portfolio/lacosina.png"
              quality={90}
            />
          }
        />
        <PortfolioCard
          Image={
            <StaticImage
              alt="hirano"
              src="../../images/portfolio/hirano_order.png"
              quality={90}
            />
          }
        />
        <PortfolioCard
          Image={
            <StaticImage
              alt="passteam"
              src="../../images/portfolio/passteam.png"
              quality={90}
            />
          }
        />
        <PortfolioCard
          Image={
            <StaticImage
              alt="sonomanmaso"
              src="../../images/portfolio/sonomanmaso.png"
              quality={90}
            />
          }
        />
        <PortfolioCard
          Image={
            <StaticImage
              alt="yeomans"
              src="../../images/portfolio/yeomans.png"
              quality={90}
            />
          }
        />
        <PortfolioCard
          Image={
            <StaticImage
              alt="rainbow-blurred"
              src="../../images/portfolio/rainbow-blurred.png"
              quality={90}
            />
          }
        />
      </div>
    </section>
  )
}

export default index
