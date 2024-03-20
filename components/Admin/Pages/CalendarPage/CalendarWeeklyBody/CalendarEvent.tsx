import useCalendarDayEvents from "@/hooks/useCalendarDayEvents"
import { DEFAULT_STUDIO_ID } from "@/lib/consts/global"
import EventItem from "./EventItem"

const CalendarEvent = ({ date }) => {
  const selectedStudio = DEFAULT_STUDIO_ID
  const { events } = useCalendarDayEvents(date, selectedStudio)

  return (
    <div className="relative h-[40px] w-full">
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </div>
  )
}

export default CalendarEvent
