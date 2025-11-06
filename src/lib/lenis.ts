import Lenis from '@studio-freight/lenis'

type LenisWithEmitter = Lenis & { __emitScroll?: () => void }

let lenis: LenisWithEmitter | null = null

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

  const raf = (time: number) => {
    lenis?.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  // Throttle scroll events for better performance
  let scrolling = false
  const emitScroll = () => {
    if (scrolling) return
    scrolling = true
    requestAnimationFrame(() => {
      window.dispatchEvent(new Event('scroll'))
      window.dispatchEvent(new CustomEvent('lenis-scroll'))
      scrolling = false
    })
  }

  lenis.__emitScroll = emitScroll
  lenis.on('scroll', emitScroll)

  if (typeof window !== 'undefined') {
    ;(window as any).lenis = lenis
  }

  return lenis
}

export const getLenis = () => lenis

export const destroyLenis = () => {
  if (lenis) {
    if (lenis.__emitScroll) {
      lenis.off('scroll', lenis.__emitScroll)
      delete lenis.__emitScroll
    }
    lenis.destroy()
    lenis = null
    // Re-enable normal scroll
    document.documentElement.classList.remove('lenis')
    document.body.style.overflow = 'auto'
    if (typeof window !== 'undefined' && (window as any).lenis) {
      delete (window as any).lenis
    }
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
