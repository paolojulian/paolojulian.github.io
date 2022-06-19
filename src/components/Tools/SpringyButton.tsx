import React, { FunctionComponent } from "react"
import { motion } from "framer-motion"

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
        scale: 1.02,
        transition: { duration: 0.1 },
      }}
      whileTap={{ scale: 1 }}
      className={"py-2 px-4 rounded-3xl bg-pink-400 text-white " + className}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default SpringyButton
