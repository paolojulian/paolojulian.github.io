import { motion } from "framer-motion"
import React, { useMemo } from "react"

export type AppIconProps = {
  children: React.ReactNode
  size?: "lg" | "base"
  variant?: "orange" | "sky"
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

const AppIcon = React.forwardRef((props: AppIconProps, ref) => {
  const { children, className, size = "base", variant = "sky" } = props

  const bgClass = useMemo(() => {
    switch (variant) {
      case "orange":
        return "bg-orange-400 shadow-glowOrange"
      case "sky":
        return "bg-cyan-500 shadow-glowSky"
      default:
        return ""
    }
  }, [variant])

  const sizeClass = useMemo(() => {
    switch (size) {
      case "lg":
        return "w-16 h-16"
      case "base":
      default:
        return "w-12 h-12"
    }
  }, [size])

  const dynamicClasses = useMemo(() => {
    return `${bgClass} ${sizeClass} ${className}`
  }, [className, sizeClass, bgClass])

  return (
    <div
      {...props}
      ref={ref as any}
      className={`text-sky-50 p-3 text-center inline-flex items-center justify-center rounded-full ${dynamicClasses}`}
    >
      {children}
    </div>
  )
})

export const AppIconMotion = motion(AppIcon)

export default AppIcon
