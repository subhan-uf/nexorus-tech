import { useEffect, useState } from 'react'

const GradientBackdrop = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[-1] bg-gradient-hue"
      style={{
        animationPlayState: prefersReducedMotion ? 'paused' : 'running'
      }}
    >
      {/* Additional subtle gradient layers for depth */}
      <div className="absolute inset-0 opacity-[0.02] bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20" />
      <div className="absolute inset-0 opacity-[0.015] bg-gradient-to-tl from-pink-500/20 via-transparent to-yellow-500/20" />
    </div>
  )
}

export default GradientBackdrop
