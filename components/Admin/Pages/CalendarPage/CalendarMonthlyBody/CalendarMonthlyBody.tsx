import { useAdminCalendar } from "@/providers/AdminCalendarProvider"
import CalendarDay from "./CalendarDay"

const CalendarMonthlyBody = () => {
  const { monthTotalDays } = useAdminCalendar()

  return (
    <div className="grid grow grid-cols-7">
      {monthTotalDays.map((day, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <CalendarDay key={i} date={day} />
      ))}
    </div>
  )
}

export default CalendarMonthlyBody
