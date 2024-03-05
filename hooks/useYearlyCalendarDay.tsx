import { useMemo } from "react"
import useCalendarDayEvents from "./useCalendarDayEvents"

const useYearlyCalendarDay = (date, studioId) => {
  const { events } = useCalendarDayEvents(date, studioId)

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
