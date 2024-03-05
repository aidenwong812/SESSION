import parseISOString from "./parseISOString"
import { availableTimes } from "./consts/bookSession"
import convertTimeFormat from "./convertTimeFormat"
import getSplitTimeRange from "./getSplitTimeRanges"
import convertTimeTo24HrFormat from "./convertTimeTo24HrFormat"
import convertComparableDate from "./convertComparableDate"
import isExistsInRange from "./isExistsInRange"
import getTimeZoneOffset from "./getTimeZoneOffset"

const getDisabledTimes = (studioEventsList, selectedDay) => {
  let timeRanges = []

  studioEventsList.forEach((event) => {
    const splitTimeRanges = getSplitTimeRange(
      event.start,
      event.end,
      selectedDay.year,
      selectedDay.month,
    )
    timeRanges = timeRanges.concat(
      splitTimeRanges.map((time) => ({
        ...time,
        summary: event.summary,
      })),
    )
  })

  const timeOffset = getTimeZoneOffset()

  const trackableTimes = timeRanges
    .filter((event) => new Date(event.start).getDate() === selectedDay.day)
    .map((event) => {
      const minimumDateTime = new Date(event.start).setHours(10 + timeOffset, 0, 0, 0)
      const maximumDateTime = new Date(event.start).setHours(21 + timeOffset, 0, 0, 0)
      const eventEndTime = parseISOString(event.end)
      const eventStartTime = parseISOString(event.start)

      const startTime = new Date(minimumDateTime > eventStartTime ? minimumDateTime : event.start)
      const endTime = new Date(maximumDateTime > eventEndTime ? event.end : maximumDateTime)

      return {
        start: convertTimeFormat(startTime),
        end: convertTimeFormat(endTime),
        summary: event.summary,
      }
    })

  const startDisabledTimes = availableTimes.slice(0, 12).filter((time, i) => {
    const startTime24Hr = convertTimeTo24HrFormat(time)
    const endTime24Hr = convertTimeTo24HrFormat(availableTimes[i + 4])
    const comparableStartDate = convertComparableDate(startTime24Hr)
    const comparableEndDate = convertComparableDate(endTime24Hr)

    return trackableTimes.some((trackableTime) =>
      isExistsInRange(trackableTime, comparableStartDate, comparableEndDate),
    )
  })

  const endDisabledTimes = startDisabledTimes.map((element) => {
    const index = availableTimes.indexOf(element)
    return availableTimes[index + 4]
  })

  return {
    startDisabledTimes,
    endDisabledTimes,
  }
}

export default getDisabledTimes
