import { useAdminCalendar } from "@/providers/AdminCalendarProvider"
import { FULL_MONTH_LABELS } from "@/lib/consts/global"
import SingleCalendar from "../SingleCalendar"

const CalendarYearlyBody = () => {
  const { yearlyCalendarYear } = useAdminCalendar()

  return (
    <div className="grid grow grid-cols-4">
      {FULL_MONTH_LABELS.map((_, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <SingleCalendar key={i} year={yearlyCalendarYear} month={i + 1} />
      ))}
    </div>
  )
}

export default CalendarYearlyBody
