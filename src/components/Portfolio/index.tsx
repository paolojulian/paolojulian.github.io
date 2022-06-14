import React, { FunctionComponent } from "react"

export interface indexProps {}

const index: FunctionComponent<indexProps> = props => {
  return (
    <section
      id="portfolio"
      className="justify-center text-center flex flex-wrap pt-16 pb-64 bg-gray-200"
    >
      <div className="w-full md:w-6/12 px-12 md:px-4">
        <h2 className="font-semibold text-4xl">Portfolio</h2>
        <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-700">
          These are some of the personal and professional projects i have done
          or collabed with in the past.
        </p>
      </div>

      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-auto px-4 md:px-0">
          <div className="flex flex-wrap">
            {/* <card-w-frame
              image-alt="barter"
              image-url="/images/barter.png"
              title="Barter"
              subtitle="React-native & ExpressJS"
            ></card-w-frame>

            <card-w-frame
              image-alt="ASTA"
              image-url="/images/asta.png"
              title="ASTA"
              subtitle="VanillaJS & Laravel"
            ></card-w-frame>

            <card-w-frame
              image-alt="ArtFX"
              image-url="/images/artfx.png"
              title="Art FX"
              subtitle="VueJS & ExpressJS"
            ></card-w-frame> */}
          </div>

          <div className="flex flex-wrap">
            {/* <card-w-frame
              image-alt="lacosina"
              image-url="/images/lacosina.png"
              title="Lacosina"
              subtitle="VanillaJS & Laravel"
            ></card-w-frame>

            <card-w-frame
              image-alt="Hirano"
              image-url="/images/hirano_order.png"
              title="Hirano"
              subtitle="VueJS & Laravel"
            ></card-w-frame>

            <card-w-frame
              image-alt="passteam"
              image-url="/images/passteam.png"
              title="PassTeam"
              subtitle="React & Laravel"
            ></card-w-frame> */}
          </div>

          <div className="flex flex-wrap">
            {/* <card-w-frame
              image-alt="Sonomanmaso"
              image-url="/images/sonomanmaso.png"
              title="Sonomanmas-o"
              subtitle="VanillaJS & Laravel"
            ></card-w-frame>

            <card-w-frame
              image-alt="Yeomans soil sample"
              image-url="/images/yeomans.png"
              title="Yeomans PLOWS"
              subtitle="React-native & ExpressJS"
            ></card-w-frame>

            <card-w-frame
              image-alt="rainbow"
              image-url="/images/rainbow-blurred.png"
              title="Rainbow channel"
              subtitle="VanillaJS & CakePHP"
            ></card-w-frame> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default index
