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
  ...props
}) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.1 },
      }}
      whileTap={{ scale: 1 }}
      className="py-2 px-4 rounded-lg bg-pink-400"
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default SpringyButton
