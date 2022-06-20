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

export const enterFromBottomVariant = (transition?: Transition | any): Variants => {
  return {
    invisible: {
      y: 300,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.5, type: 'spring', bounce: 0.1, ...transition },
    },
  }
}

export const enterFromTopVariant = (transition?: Transition | any): Variants => {
  return {
    invisible: {
      y: -300,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.5, type: 'spring', bounce: 0.1, ...transition },
    },
  }
}

export const bounceInVariant = (transition?: Transition): Variants => {
  return {
    invisible: {
      scale: 0.9,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { ...transition, type: 'spring', bounce: 0.7, duration: 1 },
    },
  }
}