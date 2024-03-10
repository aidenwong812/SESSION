import { useUpcomingCalendar } from "@/providers/UpcomingCalendarProvider"
import CalendarEvent from "../../CalendarEvent"

const EventItem = ({ startTimeIndex = 0, timePeriod = 0 }) => {
  const { intervalWidth } = useUpcomingCalendar()

  return (
    <div
      className="absolute top-0 h-full"
      style={{
        left: `${intervalWidth * startTimeIndex}px`,
        width: `${intervalWidth * timePeriod}px`,
      }}
    >
      <CalendarEvent />
    </div>
  )
}

export default EventItem
