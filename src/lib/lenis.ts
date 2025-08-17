import Lenis from '@studio-freight/lenis'

let lenis: Lenis | null = null

const isMobile = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

export const initLenis = () => {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const mobile = isMobile()
  
  if (prefersReducedMotion) {
    return null
  }

  // Don't use Lenis on mobile devices to avoid scroll conflicts
  if (mobile) {
    console.log('Mobile detected, using native scroll')
    return null
  }

  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    // direction: 'vertical',
    // gestureDirection: 'vertical',
    // smooth: true,
    // mouseMultiplier: 1,
    // smoothTouch: false, // Explicitly disable smooth touch
    // touchMultiplier: 2,
    infinite: false,
    // Add these for better performance
    syncTouch: false,
    syncTouchLerp: 0.1,
  })

  function raf(time: number) {
    lenis?.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  // Add scroll event listener for intersection observer performance
  lenis.on('scroll', (e) => {
    // Throttle scroll events for better performance
    if (e.animate) {
      // Only update on actual scroll, not during smooth scroll animation
      window.dispatchEvent(new Event('scroll'))
    }
  })

  return lenis
}

export const getLenis = () => lenis

export const destroyLenis = () => {
  if (lenis) {
    lenis.destroy()
    lenis = null
    // Re-enable normal scroll
    document.documentElement.classList.remove('lenis')
    document.body.style.overflow = 'auto'
  }
}

// Add resize handler to reinitialize if screen size changes
let resizeTimeout: NodeJS.Timeout

export const handleResize = () => {
  clearTimeout(resizeTimeout)
  resizeTimeout = setTimeout(() => {
    const mobile = isMobile()
    const hasLenis = !!lenis
    
    // If we have Lenis but we're now on mobile, destroy it
    if (hasLenis && mobile) {
      destroyLenis()
    }
    // If we don't have Lenis but we're now on desktop, initialize it
    else if (!hasLenis && !mobile) {
      const newLenis = initLenis()
      if (newLenis) {
        document.documentElement.classList.add('lenis')
        document.body.style.overflow = 'hidden'
      }
    }
  }, 250)
}