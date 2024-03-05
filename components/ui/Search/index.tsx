import { useState } from "react"
import { twMerge } from "tailwind-merge"
import Icon from "../Icon"

type SearchProps = {
  onChange?: (value: string) => void
  className?: string
  placeholder?: string
}

export default function Search({ onChange, className, placeholder }: SearchProps) {
  const [isFocus, setIsFocus] = useState(false)

  const handleChange = (e) => {
    if (onChange && typeof onChange === "function") onChange(e.target.value)
  }

  return (
    <div className={twMerge("relative shadow-gray_overlay_3_shadow", className)}>
      <input
        className="relative z-10 w-full rounded-full border-y-2 border-gray_overlay_6 border-t-transparent bg-gray_overlay_6 py-2.5 pl-12 text-sm font-light text-gray_1 focus:border-2  focus:border-session  focus:ring-session"
        placeholder={placeholder || "Search..."}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={handleChange}
      />
      <div className="absolute left-5 top-1/2 -translate-y-1/2">
        <Icon name="MagnifyingGlass" active={isFocus} />
      </div>
    </div>
  )
}
