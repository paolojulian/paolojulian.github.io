import { HTMLMotionProps, motion, useAnimation } from "framer-motion"
import React, { FunctionComponent, useEffect, useMemo } from "react"
import { useInView } from "react-intersection-observer"
import { enterFromLeftVariant } from "../../@animations"

export interface SectionTitleProps extends HTMLMotionProps<"ul"> {
  children: React.ReactNode
  variant?: "light" | "dark"
}

const SectionTitle = React.forwardRef((props: SectionTitleProps, ref) => {
  const { children, className, variant = "dark", ...otherProps } = props
  const controls = useAnimation()
  const [dividerRef, inViewAbout] = useInView({
    threshold: 0.5,
    triggerOnce: true,
    delay: 0.5,
  })

  useEffect(() => {
    if (inViewAbout) {
      controls.start("visible")
    }
  }, [controls, inViewAbout])

  const borderClass = useMemo(() => {
    switch (variant) {
      case "light":
        return "border-black"
      case "dark":
      default:
        return "border-sky-100"
    }
  }, [variant])

  const dropShadowClass = useMemo(() => {
    switch (variant) {
      case "light":
        return "drop-shadow-glowBlack"
      case "dark":
      default:
        return "drop-shadow-glowWhite"
    }
  }, [variant])

  return (
    <>
      <motion.ul
        {...otherProps}
        className={`font-semibold text-4xl text-center uppercase  mb-24 list-none ${className}`}
        animate={controls}
        initial="invisible"
        variants={enterFromLeftVariant({ staggerChildren: 0.5 })}
        ref={ref as any}
      >
        <motion.li variants={enterFromLeftVariant()}>
          <h1 className={`${dropShadowClass}`}>{children}</h1>
        </motion.li>
        <motion.li
          variants={enterFromLeftVariant()}
          className={`pt-4 mx-auto w-24 border-b-4 ${dropShadowClass} ${borderClass}`}
        ></motion.li>
      </motion.ul>
      <div ref={dividerRef}></div>
    </>
  )
})

export default SectionTitle
