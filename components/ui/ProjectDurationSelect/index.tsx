import { useEffect, useMemo } from "react"
import ProjectDurationButton from "./ProjectDurationButton"

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
        <ProjectDurationButton
          key={option.value}
          active={option.value === selected}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </ProjectDurationButton>
      ))}
    </div>
  )
}
