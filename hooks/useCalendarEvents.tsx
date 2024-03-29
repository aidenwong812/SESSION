import { useEffect, useRef, useState } from "react"
import convertDecimalDigit from "@/lib/convetDecimalDigit"
import getTimeZoneOffset from "@/lib/getTimeZoneOffset"
import { ONE_DAY_MILLISECONDS } from "@/lib/consts/global"
import { useCalendar } from "@/providers/CalendarProvider"
import getYearAndMonthValues from "@/lib/getYearAndMonthValues"
import getMonthByName from "@/lib/getMonthByName"

const useCalendarEvents = () => {
  const calendarRef = useRef(null)
  const [currentMonth, setCurrentMonth] = useState(null)
  const [currentYear, setCurrentYear] = useState(null)
  const { getCalendarEvents } = useCalendar()
  const [studioEventsList, setStudioEventsList] = useState([])

  const fetchSessionCalendarEvents = async (calendarId) => {
    const paddedMonthDigit = convertDecimalDigit(currentMonth)
    const endDateOfMonth = new Date(currentYear, currentMonth, 0).getDate()
    const timeZoneOffset = getTimeZoneOffset()
    const nextMonthStartingMilliSeconds =
      new Date(`${currentYear}-${paddedMonthDigit}-${endDateOfMonth}T00:00:00`).getTime() +
      ONE_DAY_MILLISECONDS
    const endDay = new Date(nextMonthStartingMilliSeconds)
    const timeZonePrefix = `${
      (timeZoneOffset >= 0 ? "-" : "+") + Math.abs(timeZoneOffset).toString().padStart(2, "0")
    }:00`

    const startDateTime = `${currentYear}-${paddedMonthDigit}-01T00:00:00${timeZonePrefix}`
    const endDateTime = `${currentYear}-${convertDecimalDigit(
      endDay.getMonth() + 1,
    )}-01T00:00:00${timeZonePrefix}`

    const response = await getCalendarEvents(calendarId, startDateTime, endDateTime)
    if (!response?.error) setStudioEventsList(response)
  }

  useEffect(() => {
    if (calendarRef.current) {
      const observer = new MutationObserver(() => {
        const { year: newYear, month: newMonth } = getYearAndMonthValues(calendarRef)
        setCurrentYear(newYear || currentYear)
        setCurrentMonth(getMonthByName(newMonth) || currentMonth)
      })

      observer.observe(calendarRef.current, {
        subtree: true,
        childList: true,
      })

      return () => {
        observer.disconnect()
      }
    }
    return null
  }, [calendarRef, currentMonth, currentYear])

  return { calendarRef, currentMonth, currentYear, studioEventsList, fetchSessionCalendarEvents }
}

export default useCalendarEvents
