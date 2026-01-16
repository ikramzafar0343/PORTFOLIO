export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

export const buttonHover = {
  rest: { scale: 1 },
  hover: { scale: 1.03, transition: { type: 'spring', stiffness: 300, damping: 16 } },
  tap: { scale: 0.99 },
}

export const cardHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { type: 'spring', stiffness: 260, damping: 18 } },
}

export const iconHover = {
  rest: { rotate: 0, scale: 1 },
  hover: { rotate: 4, scale: 1.06, transition: { type: 'spring', stiffness: 300, damping: 14 } },
}

