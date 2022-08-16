import { motion } from "framer-motion"
import React, { FunctionComponent } from "react"

type SpringyButtonProps =
  | ({
      children: string
      title: string
    } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | any

const SpringyButton: FunctionComponent<SpringyButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.04,
        boxShadow: "0 0px 13px #fb7185",
        transition: { duration: 0.1 },
      }}
      whileTap={{ scale: 1 }}
      className={"py-2 px-4 shadow-glowPink rounded-3xl bg-rose-400 text-white " + className}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default SpringyButton
