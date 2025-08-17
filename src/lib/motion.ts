// Motion tokens for consistent animations with mobile optimization
export const easeEnter = [0.16, 1, 0.3, 1]
export const easeSoft = [0.22, 1, 0.36, 1]
export const easeMobile = [0.25, 0.46, 0.45, 0.94] // Simpler easing for mobile

// Duration constants
export const D_FAST = 0.38
export const D_MED = 0.6
export const D_SLOW = 1.2
export const D_MOBILE = 0.4 // Faster for mobile

// Utility to detect mobile
export const isMobileDevice = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

// Common animation variants with mobile optimization
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

// Mobile-optimized fade in (no blur for better performance)
export const fadeInUpMobile = {
  initial: { 
    opacity: 0, 
    y: 8
  },
  animate: { 
    opacity: 1, 
    y: 0
  },
  transition: {
    duration: D_MOBILE,
    ease: easeMobile
  }
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.06
    }
  }
}

export const staggerContainerMobile = {
  animate: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.05
    }
  }
}

// Adaptive animation variants that choose based on device
export const getAdaptiveVariants = () => {
  const mobile = isMobileDevice()
  
  return {
    fadeInUp: mobile ? fadeInUpMobile : fadeInUp,
    stagger: mobile ? staggerContainerMobile : staggerContainer
  }
}