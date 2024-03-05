import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FC, useEffect } from "react"

interface FadeInProps {
  children: any
  className?: string
  checkInview?: boolean
}

const FadeIn: FC<FadeInProps> = ({ children, className = "", checkInview = true }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView || !checkInview) {
      controls.start("visible")
      return
    }

    controls.start("hidden")
  }, [controls, inView, checkInview])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
      className={`w-full ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default FadeIn
