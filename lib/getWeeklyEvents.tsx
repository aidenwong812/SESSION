import getAllRepeatedWeekDays from "./getAllRepeatedWeekDays"
import getDateByTimeZone from "./getDateByTimeZone"
import getMonthByTimeZone from "./getMonthByTimeZone"
import getWeekDayFromRule from "./getWeekDayFromRule"
import getYearByTimeZone from "./getYearByTimeZone"

const getWeeklyEvents = (event, startDay, endDay, studioCalendarTimeZone) => {
  const repeatedBYDays = getWeekDayFromRule(event, studioCalendarTimeZone)
  const allRepeatedDates = getAllRepeatedWeekDays(
    repeatedBYDays,
    startDay,
    endDay,
    studioCalendarTimeZone,
  )
  const startDateTime = event?.start?.dateTime || event?.start?.date
  const endDateTime = event?.end?.dateTime || event?.end?.date

  const periodTime = new Date(endDateTime).getTime() - new Date(startDateTime).getTime()

  const startTime = startDateTime.slice(11, startDateTime.length)
  const endTime = endDateTime.slice(11, endDateTime.length)

  const events = allRepeatedDates.map((date) => {
    const realEndDateTime = new Date(new Date(`${date}${startTime}`).getTime() + periodTime)

    const endYear = getYearByTimeZone(realEndDateTime, studioCalendarTimeZone)
    const endMonth = getMonthByTimeZone(realEndDateTime, studioCalendarTimeZone)
    const endDate = getDateByTimeZone(realEndDateTime, studioCalendarTimeZone)

    return {
      start: `${date}${startTime}`,
      end: `${endYear}-${endMonth}-${endDate}T${endTime}`,
      summary: event?.summary,
    }
  })

  return events
}

export default getWeeklyEvents
