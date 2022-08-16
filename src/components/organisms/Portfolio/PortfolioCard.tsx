import { motion } from "framer-motion"
import React from "react"

export interface PortfolioCardProps extends React.HTMLProps<HTMLDivElement> {
  name?: string
  stack?: string
  details?: Object
  onLearnMore?: () => any
  Image: React.ReactNode
}

const PortfolioCard = React.forwardRef<HTMLDivElement, PortfolioCardProps>(
  (props, ref) => {
    const { Image, name, stack, details, onLearnMore } = props
    return (
      <div
        className="relative overflow-hidden h-72 w-96 m-2 bg-sky-50"
        ref={ref}
      >
        <div className="absolute inset-0">{Image}</div>
        {/* Hover */}
        <div className="group opacity-0 hover:opacity-100 transition-opacity duration-500 absolute inset-0 bg-white h-full w-full text-black flex flex-col items-center justify-between py-16">
          <div className="-translate-y-36 group-hover:translate-y-0 transition-transform duration-500">
            <div className="font-semibold text-2xl">{name}</div>
            <div className="text-pink-500">{stack}</div>
          </div>
          <div className="translate-y-36 group-hover:translate-y-0 transition-transform duration-500">
            <div
              className="cursor-pointer border-2 border-pink-400 py-2 px-6 hover:bg-pink-400 hover:text-white transition-colors font-medium uppercase"
              onClick={onLearnMore}
            >
              Learn More
            </div>
          </div>
        </div>
      </div>
    )
  }
)

const PortfolioCardMotion = motion(PortfolioCard, { forwardMotionProps: true })
export default PortfolioCardMotion
