import { useMemo } from "react"
import { useAdminCalendar } from "@/providers/AdminCalendarProvider"
import useCalendarDayEvents from "./useCalendarDayEvents"

const useYearlyCalendarDay = (date, studioId) => {
  const { selectedRoom } = useAdminCalendar()
  const { events } = useCalendarDayEvents(date, studioId, selectedRoom?.name)

  const haveProject = useMemo(
    () => events.filter((event) => event.type === "project").length > 0,
    [events],
  )

  const haveSession = useMemo(
    () => events.filter((event) => event.type === "session").length > 0,
    [events],
  )

  const haveSessionAndProject = haveProject && haveSession
  const haveEvents = haveSession || haveProject
  const haveOnlySession = haveSession && !haveProject

  return {
    haveOnlySession,
    haveProject,
    haveEvents,
    haveSessionAndProject,
    events,
  }
}

export default useYearlyCalendarDay
