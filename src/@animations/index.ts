import { Transition, Variants } from "framer-motion";

export const fadeInVariant = (transition?: Transition): Variants => {
  return {
    invisible: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: { ...transition },
    },
  }
}

export const rotateFromRightVariant = (transition?: Transition): Variants => {
  return {
    invisible: {
      opacity: 0,
      rotateY: 60 
    },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: { ...transition, type: 'spring', bounce: 0.5, duration: 1 },
    },
  }
}

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