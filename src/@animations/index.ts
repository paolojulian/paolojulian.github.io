import { Transition, Variants } from "framer-motion";

export const enterFromLeftVariant = (transition?: Transition): Variants => {
  return {
    invisible: {
      opacity: 0,
      translateX: -300,
    },
    visible: {
      opacity: 1,
      translateX: 0,
      transition: { ...transition, type: "spring", bounce: 0.2, duration: 1.5, },
    },
  }
}

export const enterFromRightVariant = (transition?: Transition): Variants => {
  return {
    invisible: {
      opacity: 0,
      translateX: 300,
    },
    visible: {
      opacity: 1,
      translateX: 0,
      transition: { ...transition, type: "spring", bounce: 0.2, duration: 1.5 },
    },
  }
}