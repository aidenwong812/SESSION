import useCalendarDayEvents from "@/hooks/useCalendarDayEvents"
import { useAdminCalendar } from "@/providers/AdminCalendarProvider"
import EventItem from "./EventItem"

const CalendarEvent = ({ date }) => {
  const { selectedStudio } = useAdminCalendar()
  const { events } = useCalendarDayEvents(date, selectedStudio?.id)

  return (
    <div className="relative h-[40px] w-full">
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </div>
  )
}

export default CalendarEvent
