import { useEffect, useMemo } from "react"
import dayjs from "dayjs"
import SessionDurationButton from "./SessionDurationButton"
import RoomSelect from "./RoomSelect"

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
        <SessionDurationButton
          key={`${option.value[0].valueOf()}-${option.value[1].valueOf()}`}
          active={option.value === selected}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </SessionDurationButton>
      ))}
      <RoomSelect />
    </div>
  )
}
