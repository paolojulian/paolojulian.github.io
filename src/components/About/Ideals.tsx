import React, { FunctionComponent } from "react"

export interface IdealsProps {}

const Ideals: FunctionComponent<IdealsProps> = props => {
  return (
    <div className="flex flex-wrap justify-center items-start my-48 text-center">
      <div
        id="serviceFast"
        className="flex flex-col items-center justify-center px-4 w-6/12 md:w-1/4 mb-4"
      >
        <div
          className="p-3 text-center items-center justify-center mb-4 w-16 h-16 shadow-lg rounded-full bg-orange-400 text-gray-50"
          data-aos="fade-up"
          data-aos-anchor="#serviceFast"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div
          className="text-2xl mb-2 font-bold"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-anchor="#serviceFast"
        >
          Fast
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor="#serviceFast"
          data-aos-delay="500"
        >
          Fast load times and lag free interaction.
        </div>
      </div>

      <div
        id="serviceResponsive"
        className="flex flex-col items-center justify-center px-4 w-6/12 md:w-1/4 mb-4"
      >
        <div
          className="p-3 text-center items-center justify-center mb-4 w-16 h-16 shadow-lg rounded-full bg-orange-400 text-gray-50"
          data-aos="fade-up"
          data-aos-anchor="#serviceResponsive"
          data-aos-delay="200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div
          className="text-2xl mb-2 font-bold"
          data-aos="fade-left"
          data-aos-anchor="#serviceResponsive"
          data-aos-delay="400"
        >
          Responsive
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor="#serviceResponsive"
          data-aos-delay="700"
        >
          Layouts should always work on any device, big or small.
        </div>
      </div>

      <div
        id="serviceMaintainable"
        className="flex flex-col items-center justify-center px-4 w-6/12 md:w-1/4 mb-4"
      >
        <div
          className="p-3 text-center items-center justify-center mb-4 w-16 h-16 shadow-lg rounded-full bg-orange-400 text-gray-50"
          data-aos="fade-up"
          data-aos-anchor="#serviceMaintainable"
          data-aos-delay="400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
          </svg>
        </div>
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
          One of the most underrated parts of programming, but it is one of the
          most important things that I consider.
        </div>
      </div>

      <div
        id="serviceSimple"
        className="flex flex-col items-center justify-center px-4 w-6/12 md:w-1/4 mb-4"
      >
        <div
          className="p-3 text-center items-center justify-center mb-4 w-16 h-16 shadow-lg rounded-full bg-orange-400 text-gray-50"
          data-aos="fade-up"
          data-aos-anchor="#serviceSimple"
          data-aos-delay="600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </div>
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
          Keeping things simple and consice, may it be design-wise or code-wise.
        </div>
      </div>
    </div>
  )
}

export default Ideals