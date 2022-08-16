import { motion } from "framer-motion"
import React, { FunctionComponent } from "react"

export interface SocialIconProps {
  children: React.ReactNode
}

const SocialIcon: FunctionComponent<
  (SocialIconProps & React.HTMLProps<HTMLAnchorElement>) | any
> = ({ children, className, ...props }) => {
  return (
    <motion.a
      whileHover={{
        scale: [1, 1.5, 1.5, 1.5],
        rotate: [0, -10, -10, -10, -10],
        boxShadow: "0 0px 13px #ffffff",
      }}
      className={
        "cursor-pointer shadow-glowWhite rounded py-2 px-3 mx-4 bg-gray-500 text-sky-50 " +
        className
      }
      target="_blank"
      {...props}
    >
      {children}
    </motion.a>
  )
}

export default SocialIcon
