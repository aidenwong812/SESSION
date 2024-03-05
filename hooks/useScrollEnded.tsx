import { MotionValue } from "framer-motion"
import { useEffect, useState } from "react"

interface Props {
  ref: any
  scrollY: MotionValue<number>
}

const useScrollEnded = ({ ref, scrollY }: Props) => {
  const [isScrollEnded, setIsScrollEnded] = useState(false)

  useEffect(() => {
    if (scrollY && ref.current) {
      scrollY.clearListeners()
      scrollY.on("change", () => {
        setIsScrollEnded(
          scrollY.get() === ref.current.scrollHeight - ref.current.offsetHeight &&
            scrollY.get() > 0,
        )
      })
    }
  }, [ref, scrollY])

  return {
    isScrollEnded,
  }
}

export default useScrollEnded
