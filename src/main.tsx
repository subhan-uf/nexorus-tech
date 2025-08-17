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

// Initialize Lenis after the app has rendered (only on desktop)
setTimeout(() => {
  const mobile = isMobile()
  
  if (!mobile) {
    const lenis = initLenis()
    if (lenis) {
      document.documentElement.classList.add('lenis')
      document.body.style.overflow = 'hidden'
    }
  } else {
    // Ensure mobile has proper scroll
    document.documentElement.classList.remove('lenis')
    document.body.style.overflow = 'auto'
    // document.body.style.webkitOverflowScrolling = 'touch'
    
    // Add mobile-specific class for CSS optimizations
    document.documentElement.classList.add('mobile-device')
  }
}, 100)

// Handle resize events
window.addEventListener('resize', handleResize)

// Add performance optimizations for mobile
if (isMobile()) {
  // Reduce animation complexity on mobile
  document.documentElement.style.setProperty('--animation-duration-mobile', '0.3s')
  
  // Add touch-action optimization
  document.body.style.touchAction = 'pan-y'
  
  // Optimize viewport for mobile
  const viewport = document.querySelector('meta[name=viewport]')
  if (viewport) {
    viewport.setAttribute('content', 'width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no')
  }
}

// Preload critical resources
const preloadCriticalResources = () => {
  // Preload fonts
  const fontLinks = [
    'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap',
    'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap'
  ]
  
  fontLinks.forEach(href => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'style'
    link.href = href
    document.head.appendChild(link)
  })
}

// Initialize performance optimizations
preloadCriticalResources()