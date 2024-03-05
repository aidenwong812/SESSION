import { useAdminCalendar } from "@/providers/AdminCalendarProvider"
import CalendarEvent from "./CalendarEvent"

const CalendarEvents = () => {
  const { weekDays } = useAdminCalendar()

  return (
    <div
      className="flex size-full flex-col justify-center
    gap-y-[40px]"
    >
      {weekDays.map((date, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <CalendarEvent key={i} date={date} />
      ))}
    </div>
  )
}

export default CalendarEvents
