import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/animations.css'
import { initLenis } from './lib/lenis'

// Initialize Lenis smooth scrolling after render
const root = createRoot(document.getElementById("root")!)
root.render(<App />)

// Initialize Lenis after the app has rendered
setTimeout(() => {
  const lenis = initLenis()
  if (lenis) {
    document.documentElement.classList.add('lenis')
    document.body.style.overflow = 'hidden'
  }
}, 100)
