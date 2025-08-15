import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { fadeInUp, staggerContainer } from '@/lib/motion'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

const Reveal = ({ children, className, delay = 0 }: RevealProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px -15% 0px'
  })

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      variants={fadeInUp}
      transition={{
        ...fadeInUp.transition,
        delay
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

// Stagger wrapper for multiple children
Reveal.Stagger = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '0px 0px -15% 0px' }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
