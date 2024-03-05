import { FC, LegacyRef, ReactNode, useEffect, useRef, useState } from "react"
import useIsMobile from "@/hooks/useIsMobile"
import usePulseEffect from "./usePulseEffect"
import RadialGradient from "./RadialGradient"

interface ButtonProps {
  id: string
  refP?: Element
  children?: ReactNode
  className?: string
  type?: "button" | "submit" | "reset" | undefined
  pulseColor?: string
  onClick?: (e: any) => void
  disabled?: boolean
  bgVariant?: "primary" | "radial"
}

const Button: FC<ButtonProps> = ({
  id,
  refP,
  children,
  pulseColor,
  className,
  onClick,
  disabled,
  bgVariant = "radial",
  ...rest
}) => {
  const elementRef = useRef()
  const ref = useRef() as any
  const pulseRef = useRef()
  const [isHovered, setIsHovered] = useState(false)

  const isMobile = useIsMobile()

  usePulseEffect({
    ref,
    pulseRef,
    pulseColor,
  })

  useEffect(() => {
    if (isMobile && isHovered) {
      const interval = setTimeout(() => {
        setIsHovered(false)
        if (ref.current) ref.current.style.transform = "scale(1)"
        clearInterval(interval)
      }, 200)
    }
  }, [isHovered])

  const handleMouseOver = () => {
    setIsHovered(true)
  }

  const handleClick = (e) => {
    if (isMobile && ref.current) {
      ref.current.style.transform = "scale(1.05)"
      setIsHovered(true)
    }
    if (onClick) onClick(e)
  }

  const handleTouchStart = () => {
    if (isMobile && ref.current) {
      ref.current.style.transform = "scale(1.05)"
      setIsHovered(true)
    }
  }

  return (
    <button
      ref={ref}
      id={id}
      type="button"
      className={`relative overflow-hidden rounded-[30px]
          text-[white] transition
          duration-[300ms] hover:scale-[1.05]
          ${className || ""}
          ${disabled ? "cursor-not-allowed !border-none" : ""}`}
      disabled={disabled}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseOut={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      {...rest}
    >
      <div
        className={`absolute left-0 top-0 z-[100]
        z-[10] size-full
        !border-none bg-[#12121166] bg-gradient_s_1 shadow-[0px_0px_40px_0px_#a1ea0466] ${
          !disabled ? "!hidden" : ""
        }`}
      />
      <div
        className={`absolute left-0 top-0 z-[100]
        z-[15] size-full !border-none bg-[#12121166] ${!disabled ? "!hidden" : ""}`}
      />
      <div
        className={`absolute
        left-[-5px] top-[-5px] z-[5]
        size-[0px]
        translate-x-[-50%]
        translate-y-[-50%]
        rounded-[50%]`}
        ref={pulseRef}
      />
      {bgVariant === "radial" && !disabled && <RadialGradient isHovered={isHovered} />}
      <div
        ref={(refP as unknown as LegacyRef<HTMLDivElement>) || elementRef}
        className="relative z-[20] flex
        w-full items-center justify-center
        gap-[10px]"
      >
        {children}
      </div>
    </button>
  )
}

export default Button
