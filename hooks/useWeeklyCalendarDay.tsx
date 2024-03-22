import { useAdminCalendar } from "@/providers/AdminCalendarProvider"
import useCalendarDayEvents from "./useCalendarDayEvents"

const useWeeklyCalendarDay = (date, studioId) => {
  const { selectedRoom } = useAdminCalendar()
  const { events } = useCalendarDayEvents(date, studioId, selectedRoom?.name)

  return {
    events,
  }
}

export default useWeeklyCalendarDay
