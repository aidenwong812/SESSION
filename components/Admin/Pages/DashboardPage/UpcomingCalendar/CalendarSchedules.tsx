import { useUpcomingCalendar } from "@/providers/UpcomingCalendarProvider"
import CalendarSchedule from "./CalendarSchedule"

const CalendarSchedules = () => {
  const { upcomingDays } = useUpcomingCalendar()

  return (
    <div className="flex size-full flex-col justify-center">
      {upcomingDays.map((date, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <CalendarSchedule key={i} date={date} />
      ))}
    </div>
  )
}

export default CalendarSchedules
