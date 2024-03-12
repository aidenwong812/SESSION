import { useEffect, useMemo } from "react"
import { twMerge } from "tailwind-merge"

const Button = ({ children, active = false, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={twMerge(
      "bg-gray_overlay_6 rounded-full px-6 py-2 flex items-center jusitfy-center text-gray_2 font-urwgeometric",
      active && "bg-gradient_s_1 text-black_0 font-urwgeometric_semibold shadow-session_shadow",
    )}
  >
    <p>{children}</p>
  </button>
)

export default function ProjectDurationSelect({ selected, onChange }) {
  const options = useMemo(
    () => [
      { label: "All", value: "all" },
      { label: "Within 2 weeks", value: "2-weeks" },
      { label: "Within a month", value: "a-month" },
      { label: "Within 2 month", value: "2-months" },
      { label: "Within 3 month", value: "3-months" },
      { label: "Within 6 month", value: "6-months" },
      { label: "Within a year", value: "a-year" },
    ],
    [],
  )

  useEffect(() => {
    onChange(options[0].value)
  }, [onChange, options])

  return (
    <div className="flex w-full items-center gap-3 rounded-full bg-gray_overlay_6 px-5 py-4">
      {options.map((option) => (
        <Button
          key={option.value}
          active={option.value === selected}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  )
}
