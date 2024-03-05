/* eslint-disable-next-line no-param-reassign */
import React, { useEffect } from "react"
import styles from "./Button.module.css"

interface Props {
  ref?: React.RefObject<HTMLButtonElement>
  pulseRef?: React.RefObject<HTMLDivElement>
  pulseColor?: string
}

const usePulseEffect = ({ ref, pulseRef, pulseColor }: Props) => {
  const handleMouseClick = async (event: any) => {
    pulseRef.current.classList.remove(styles.pulse__effect)
    const posX = event?.clientX
    const posY = event?.clientY

    const topY = ref.current.getBoundingClientRect().top
    const leftX = ref.current.getBoundingClientRect().left

    const offsetX = posX - leftX
    const offsetY = posY - topY

    pulseRef.current.style.left = `${offsetX}px`
    pulseRef.current.style.top = `${offsetY}px`
    pulseRef.current.style.backgroundColor = pulseColor || "white"

    pulseRef.current.classList.add(styles.pulse__effect)
  }

  useEffect(() => {
    const handleMouseClick = async (event: any) => {
      pulseRef.current.classList.remove(styles.pulse__effect)
      const posX = event?.clientX
      const posY = event?.clientY

      const topY = ref.current.getBoundingClientRect().top
      const leftX = ref.current.getBoundingClientRect().left

      const offsetX = posX - leftX
      const offsetY = posY - topY

      pulseRef.current.style.left = `${offsetX}px`
      pulseRef.current.style.top = `${offsetY}px`
      pulseRef.current.style.backgroundColor = pulseColor || "white"

      pulseRef.current.classList.add(styles.pulse__effect)
    }

    if (ref?.current && pulseRef?.current) {
      ref.current.removeEventListener("click", handleMouseClick)
      ref.current.addEventListener("click", handleMouseClick)
    }
  }, [ref, pulseRef])
}

export default usePulseEffect
