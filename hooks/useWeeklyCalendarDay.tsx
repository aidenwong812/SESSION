import useCalendarDayEvents from "./useCalendarDayEvents"

const useWeeklyCalendarDay = (date, studioId) => {
  const { events } = useCalendarDayEvents(date, studioId)

  return {
    events,
  }
}

export default useWeeklyCalendarDay
