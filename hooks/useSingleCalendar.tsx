import { useMemo } from "react"
import { MONTH_CALENDAR_DAY_COUNT } from "@/lib/consts/global"
import getDateInfo from "@/lib/getDateInfo"
import getWeekdayInfo from "@/lib/getWeekDayInfo"

const useSingleCalendar = (year, month) => {
  const calendarMonthFirstWeekDay = useMemo(() => getWeekdayInfo(year, month, 1), [year, month])
  const calendarMonthLastDay = useMemo(() => getDateInfo(year, month + 1, 0), [year, month])

  const prevMonthDays = useMemo(
    () => (calendarMonthFirstWeekDay ? Array(calendarMonthFirstWeekDay - 1).fill(0) : []),
    [calendarMonthFirstWeekDay],
  )

  const monthDays = useMemo(
    () =>
      Array.from({ length: calendarMonthLastDay }, (_, index) => ({
        year,
        month,
        day: index + 1,
      })),
    [calendarMonthLastDay, year, month],
  )

  return {
    prevMonthDays,
    monthDays,
  }
}

export default useSingleCalendar
