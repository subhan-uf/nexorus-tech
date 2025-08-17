import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

const Reveal = ({ children, className, delay = 0 }: RevealProps) => {
  const [isMobile, setIsMobile] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  
  // Detect mobile and reduced motion preference
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    }
    
    const checkReducedMotion = () => {
      setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    }
    
    checkMobile()
    checkReducedMotion()
    
    window.addEventListener('resize', checkMobile)
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    mediaQuery.addEventListener('change', checkReducedMotion)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
      mediaQuery.removeEventListener('change', checkReducedMotion)
    }
  }, [])

  const [ref, inView] = useInView({
    triggerOnce: true,
    // More aggressive mobile settings
    rootMargin: isMobile ? '0px 0px -5% 0px' : '0px 0px -15% 0px',
    threshold: isMobile ? 0.1 : 0.2,
    // Add fallback for older browsers
    fallbackInView: true
  })

  // Skip animation for reduced motion or use simpler fade
  if (prefersReducedMotion) {
    return (
      <div
        ref={ref}
        className={cn('transition-opacity duration-500', inView ? 'opacity-100' : 'opacity-0', className)}
      >
        {children}
      </div>
    )
  }

  // Mobile-optimized animation variants
  const mobileVariants = {
    initial: { 
      opacity: 0, 
      y: isMobile ? 8 : 16, // Smaller movement on mobile
      filter: isMobile ? 'blur(0px)' : 'blur(10px)' // No blur on mobile for performance
    },
    animate: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)' 
    },
    transition: {
      duration: isMobile ? 0.4 : 0.6, // Faster on mobile
      ease: isMobile ? [0.25, 0.46, 0.45, 0.94] : [0.16, 1, 0.3, 1], // Simpler easing on mobile
      delay: isMobile ? delay * 0.5 : delay // Reduce delays on mobile
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      variants={mobileVariants}
      transition={mobileVariants.transition as any}
      className={cn(className)}
      // Force hardware acceleration
      style={{ 
        willChange: inView ? 'auto' : 'transform, opacity',
        transform: 'translateZ(0)' // Force GPU acceleration
      }}
    >
      {children}
    </motion.div>
  )
}

// Optimized Stagger component for mobile
Reveal.Stagger = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const staggerVariants = {
    animate: {
      transition: {
        staggerChildren: isMobile ? 0.03 : 0.06, // Faster stagger on mobile
        delayChildren: isMobile ? 0.05 : 0.1
      }
    }
  }

  return (
    <motion.div
      variants={staggerVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ 
        once: true, 
        margin: isMobile ? '0px 0px -5% 0px' : '0px 0px -15% 0px',
        amount: isMobile ? 0.1 : 0.2
      }}
      className={cn(className)}
      style={{ transform: 'translateZ(0)' }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal



// Below is to stop the reveal animation and fix the jittery reveal on phones:

// import { motion, MotionProps } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'
// import { cn } from '@/lib/utils'
// import { useEffect, useState } from 'react'

// interface RevealProps {
//   children: React.ReactNode
//   className?: string
//   delay?: number
// }

// const Reveal = ({ children, className, delay = 0 }: RevealProps) => {
//   const [isMobile, setIsMobile] = useState(false)
  
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 768)
//     }
    
//     checkMobile()
//     window.addEventListener('resize', checkMobile)
    
//     return () => window.removeEventListener('resize', checkMobile)
//   }, [])

//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     // Much more lenient settings for mobile
//     rootMargin: isMobile ? '0px 0px 10% 0px' : '0px 0px -10% 0px',
//     threshold: isMobile ? 0.05 : 0.1,
//   })

//   // For mobile: use CSS-only animations (much more reliable)
//   if (isMobile) {
//     return (
//       <div
//         ref={ref}
//         className={cn(
//           'transition-all duration-500 ease-out',
//           inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
//           className
//         )}
//         style={{ 
//           transitionDelay: `${delay * 200}ms`,
//           willChange: inView ? 'auto' : 'transform, opacity'
//         }}
//       >
//         {children}
//       </div>
//     )
//   }

//   // For desktop: use Framer Motion
//   const motionProps: MotionProps = {
//     ref,
//     initial: { opacity: 0, y: 20 },
//     animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
//     transition: { 
//       duration: 0.6, 
//       delay: delay,
//       ease: [0.21, 1.02, 0.73, 1]
//     },
//     className: cn(className)
//   }

//   return <motion.div {...motionProps}>{children}</motion.div>
// }

// // Simplified Stagger for mobile
// Reveal.Stagger = ({ children, className }: { children: React.ReactNode; className?: string }) => {
//   const [isMobile, setIsMobile] = useState(false)
  
//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 768)
//     }
    
//     checkMobile()
//     window.addEventListener('resize', checkMobile)
    
//     return () => window.removeEventListener('resize', checkMobile)
//   }, [])

//   // For mobile: just a regular div with CSS stagger
//   if (isMobile) {
//     return (
//       <div className={cn('mobile-stagger', className)}>
//         {children}
//       </div>
//     )
//   }

//   // For desktop: use Framer Motion stagger
//   return (
//     <motion.div
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, margin: '-10%' }}
//       variants={{
//         hidden: {},
//         visible: { transition: { staggerChildren: 0.1 } }
//       }}
//       className={cn(className)}
//     >
//       {children}
//     </motion.div>
//   )
// }

// export default Reveal