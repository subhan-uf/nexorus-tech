// Motion tokens for consistent animations
export const easeEnter = [0.16, 1, 0.3, 1]
export const easeSoft = [0.22, 1, 0.36, 1]

// Duration constants
export const D_FAST = 0.38
export const D_MED = 0.6
export const D_SLOW = 1.2

// Common animation variants
export const fadeInUp = {
  initial: { 
    opacity: 0, 
    y: 16, 
    filter: 'blur(10px)' 
  },
  animate: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)' 
  },
  transition: {
    duration: D_MED,
    ease: easeEnter
  }
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.06
    }
  }
}
