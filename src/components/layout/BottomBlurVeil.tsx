import { useEffect, useState } from 'react'

const BottomBlurVeil = () => {
  const [blurIntensity, setBlurIntensity] = useState('backdrop-blur-[6px]')

  useEffect(() => {
    // Reduce blur for lower-end devices or reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isLowEndDevice = navigator.hardwareConcurrency < 6

    if (prefersReducedMotion || isLowEndDevice) {
      setBlurIntensity('backdrop-blur-[2px]')
    }
  }, [])

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 h-[22vh] pointer-events-none z-10 ${blurIntensity}`}
      style={{
        maskImage: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.35) 50%, rgba(0,0,0,0) 85%)',
        WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.35) 50%, rgba(0,0,0,0) 85%)'
      }}
    >
      {/* Subtle top edge falloff */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent" />
    </div>
  )
}

export default BottomBlurVeil
