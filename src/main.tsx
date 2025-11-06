import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/animations.css'
import { initLenis, handleResize } from './lib/lenis'

// Initialize React app
const root = createRoot(document.getElementById("root")!)
root.render(<App />)

// Mobile detection
const isMobile = () => {
  return window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

const setupLenis = () => {
  const mobile = isMobile()

  if (!mobile) {
    const lenis = initLenis()
    if (lenis) {
      document.documentElement.classList.add('lenis')
      document.body.style.overflow = 'hidden'
    }
    document.documentElement.classList.remove('mobile-device')
  } else {
    document.documentElement.classList.remove('lenis')
    document.body.style.overflow = 'auto'
    document.documentElement.classList.add('mobile-device')
  }
}

const scheduleLenis = () => {
  if ('requestIdleCallback' in window) {
    ;(window as any).requestIdleCallback(setupLenis, { timeout: 300 })
  } else {
    window.setTimeout(setupLenis, 120)
  }
}

scheduleLenis()

// Handle resize events
window.addEventListener('resize', handleResize, { passive: true })

// Add performance optimizations for mobile
if (isMobile()) {
  document.documentElement.style.setProperty('--animation-duration-mobile', '0.3s')
  document.body.style.touchAction = 'pan-y'

  const viewport = document.querySelector('meta[name=viewport]')
  if (viewport) {
    viewport.setAttribute('content', 'width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no')
  }
}

// Preload critical resources
const preloadCriticalResources = () => {
  const fontLinks = [
    'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap',
    'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap'
  ]

  fontLinks.forEach(href => {
    if (document.head.querySelector(`link[data-preload-font="${href}"]`)) {
      return
    }
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'style'
    link.href = href
    link.crossOrigin = 'anonymous'
    link.dataset.preloadFont = href
    link.onload = () => {
      link.rel = 'stylesheet'
    }
    document.head.appendChild(link)
  })
}

if ('requestIdleCallback' in window) {
  ;(window as any).requestIdleCallback(preloadCriticalResources)
} else {
  window.setTimeout(preloadCriticalResources, 0)
}
