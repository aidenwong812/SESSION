import { useEffect, useMemo } from "react"
import { twMerge } from "tailwind-merge"
import dayjs from "dayjs"

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

export default function SessionDurationSelect({ selected, onChange }) {
  const options = useMemo(() => {
    const today = dayjs()
    const comingMonths = [1, 2, 3].map((diff) => today.add(diff, "month"))
    const lastMonth = today.add(comingMonths.length + 1, "month")
    return [
      { label: "All", value: "all" },
      { label: "This Week", value: [today.startOf("week"), today.endOf("week")] },
      { label: "This Month", value: [today.startOf("month"), today.endOf("month")] },
      ...comingMonths.map((month) => ({
        label: month.format("MMMM"),
        value: [month.startOf("month"), month.endOf("month")],
      })),
      {
        label: `In ${comingMonths.length + 1} months +`,
        value: [lastMonth.startOf("month"), lastMonth.endOf("month")],
      },
    ]
  }, [])

  useEffect(() => {
    onChange(options[0].value)
  }, [onChange, options])

  return (
    <div className="flex w-full items-center gap-3 rounded-full bg-gray_overlay_6 px-5 py-4">
      {options.map((option) => (
        <Button
          key={`${option.value[0].valueOf()}-${option.value[1].valueOf()}`}
          active={option.value === selected}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  )
}
