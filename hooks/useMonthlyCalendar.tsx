import { useMemo, useState } from "react"
import { MAXIMUM_MONTH, MINIMUM_MONTH, MONTH_CALENDAR_DAY_COUNT } from "@/lib/consts/global"
import getDateInfo from "@/lib/getDateInfo"
import getWeekdayInfo from "@/lib/getWeekDayInfo"

const useMonthlyCalendar = () => {
  const currentDateTime = new Date()
  const [monthlyCalendarYear, setMonthlyCalendarYear] = useState(currentDateTime.getFullYear())
  const [monthlyCalendarMonth, setMonthlyCalendarMonth] = useState(currentDateTime.getMonth() + 1)
  const [monthlyCalendarDate, setMonthlyCalendarDate] = useState(currentDateTime.getDate())

  const monthlyCalendarMonthFirstWeekday = useMemo(
    () => getWeekdayInfo(monthlyCalendarYear, monthlyCalendarMonth, 1),
    [monthlyCalendarYear, monthlyCalendarMonth],
  )
  const prevMonthLastDay = useMemo(
    () => getDateInfo(monthlyCalendarYear, monthlyCalendarMonth, 0),
    [monthlyCalendarYear, monthlyCalendarMonth],
  )
  const monthlyCalendarMonthLastDay = useMemo(
    () => getDateInfo(monthlyCalendarYear, monthlyCalendarMonth + 1, 0),
    [monthlyCalendarYear, monthlyCalendarMonth],
  )

  const prevMonthDays = useMemo(
    () =>
      Array.from({ length: monthlyCalendarMonthFirstWeekday - 1 }, (_, index) => ({
        year:
          monthlyCalendarMonth === MINIMUM_MONTH ? monthlyCalendarYear - 1 : monthlyCalendarYear,
        month: monthlyCalendarMonth === MINIMUM_MONTH ? MAXIMUM_MONTH : monthlyCalendarMonth - 1,
        day: prevMonthLastDay - index,
      })).reverse(),
    [monthlyCalendarMonthFirstWeekday, prevMonthLastDay, monthlyCalendarYear, monthlyCalendarMonth],
  )

  const monthlyCalendarMonthDays = useMemo(
    () =>
      Array.from({ length: monthlyCalendarMonthLastDay }, (_, index) => ({
        year: monthlyCalendarYear,
        month: monthlyCalendarMonth,
        day: index + 1,
      })),
    [monthlyCalendarMonthLastDay, monthlyCalendarYear, monthlyCalendarMonth],
  )

  const nextMonthDays = useMemo(
    () =>
      Array.from(
        {
          length:
            (MONTH_CALENDAR_DAY_COUNT - prevMonthDays.length - monthlyCalendarMonthDays.length) % 7,
        },
        (_, index) => ({
          year:
            monthlyCalendarMonth === MAXIMUM_MONTH ? monthlyCalendarYear + 1 : monthlyCalendarYear,
          month: monthlyCalendarMonth === MAXIMUM_MONTH ? 1 : monthlyCalendarMonth + 1,
          day: index + 1,
        }),
      ),
    [prevMonthDays, monthlyCalendarMonthDays, monthlyCalendarYear, monthlyCalendarMonth],
  )

  const monthTotalDays = useMemo(
    () => [...prevMonthDays, ...monthlyCalendarMonthDays, ...nextMonthDays].flat(),
    [prevMonthDays, monthlyCalendarMonthDays, nextMonthDays],
  )

  const goPrevMonth = () => {
    const year =
      monthlyCalendarMonth === MINIMUM_MONTH ? monthlyCalendarYear - 1 : monthlyCalendarYear
    const month = monthlyCalendarMonth === MINIMUM_MONTH ? MAXIMUM_MONTH : monthlyCalendarMonth - 1

    setMonthlyCalendarYear(year)
    setMonthlyCalendarMonth(month)
  }

  const goNextMonth = () => {
    const year =
      monthlyCalendarMonth === MAXIMUM_MONTH ? monthlyCalendarYear + 1 : monthlyCalendarYear
    const month = monthlyCalendarMonth === MAXIMUM_MONTH ? MINIMUM_MONTH : monthlyCalendarMonth + 1

    setMonthlyCalendarYear(year)
    setMonthlyCalendarMonth(month)
  }

  return {
    monthlyCalendarYear,
    monthlyCalendarMonth,
    monthlyCalendarDate,
    monthTotalDays,
    goPrevMonth,
    goNextMonth,
  }
}

export default useMonthlyCalendar
