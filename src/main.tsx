import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/animations.css'
import { initLenis } from './lib/lenis'

// Initialize Lenis smooth scrolling after render
const root = createRoot(document.getElementById("root")!)
root.render(<App />)

// Initialize Lenis after the app has rendered - with mobile detection
setTimeout(() => {
  // Check if device is mobile/tablet
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                   window.innerWidth < 768 || 
                   ('ontouchstart' in window);

  // Only initialize Lenis on desktop
  if (!isMobile) {
    const lenis = initLenis()
    if (lenis) {
      document.documentElement.classList.add('lenis')
      document.body.style.overflow = 'hidden'
    }
  } else {
    // For mobile, ensure normal scrolling
    document.body.style.overflow = 'auto'
    document.documentElement.style.scrollBehavior = 'smooth'
  }
}, 100)