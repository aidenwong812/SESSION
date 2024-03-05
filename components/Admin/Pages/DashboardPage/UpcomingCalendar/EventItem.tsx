import { useUpcomingCalendar } from "@/providers/UpcomingCalendarProvider"
import CalendarEvent from "../../CalendarEvent"

const EventItem = ({ startTimeIndex = 0, timePeriod = 0, isSession = true }) => {
  const { intervalWidth } = useUpcomingCalendar()

  return (
    <div
      className="absolute top-0 h-full"
      style={{
        left: `${intervalWidth * startTimeIndex}px`,
        width: `${intervalWidth * timePeriod}px`,
      }}
    >
      <CalendarEvent isSession={isSession} />
    </div>
  )
}

export default EventItem
