import { useAuth } from "@/providers/AuthProvider"
import { useUpcomingCalendar } from "@/providers/UpcomingCalendarProvider"
import { DEFAULT_STUDIO_ID } from "@/lib/consts/global"
import useCalendarDayEvents from "@/hooks/useCalendarDayEvents"
import EventItem from "./EventItem"

const CalendarSchedule = ({ date }) => {
  const { userData } = useAuth()
  const selectedStudio = userData?.studioId || DEFAULT_STUDIO_ID
  const { selectedRoom } = useUpcomingCalendar()
  const { events } = useCalendarDayEvents(date, selectedStudio, selectedRoom?.name)

  return (
    <div className="relative my-[6px] size-full">
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </div>
  )
}

export default CalendarSchedule
