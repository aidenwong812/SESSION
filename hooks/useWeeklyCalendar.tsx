import { useMemo, useState } from "react"
import { useMeasure } from "react-use"
import { ONE_DAY_MILLISECONDS, SHORT_MONTH_LABELS, TOTAL_DAYS_PER_WEEK } from "@/lib/consts/global"

const useWeeklyCalendar = () => {
  const [weeklyCalendarRef, { width }] = useMeasure()
  const intervalWidth = width ? width / 16 : 0

  const todayEpochTime = new Date().getTime()
  const todayOfWeekday = new Date().getDay()
  const [firstDayOfWeek, setFirstDayOfWeek] = useState(
    todayEpochTime - ONE_DAY_MILLISECONDS * (todayOfWeekday - 1),
  )
  const [monthsInWeek, setMonthsInWeek] = useState([])

  const weekDays = useMemo(() => {
    const months = []
    return Array.from({ length: 7 }, (_i, index) => {
      const epochTime = firstDayOfWeek + ONE_DAY_MILLISECONDS * index
      const dateTime = new Date(epochTime)
      const monthDigit = dateTime.getMonth()

      if (!months.includes(monthDigit)) {
        months.push(monthDigit)
        setMonthsInWeek([...months])
      }
      return {
        year: dateTime.getFullYear(),
        month: monthDigit + 1,
        day: dateTime.getDate(),
      }
    }).reverse()
  }, [firstDayOfWeek])

  const monthLabel = useMemo(
    () => monthsInWeek.map((monthDigit) => SHORT_MONTH_LABELS[monthDigit]).join(" - "),
    [monthsInWeek],
  )
  const yearLabel = useMemo(() => new Date(firstDayOfWeek).getFullYear(), [firstDayOfWeek])

  const goPrevWeek = () => {
    setFirstDayOfWeek(firstDayOfWeek - ONE_DAY_MILLISECONDS * TOTAL_DAYS_PER_WEEK)
  }

  const goNextWeek = () => {
    setFirstDayOfWeek(firstDayOfWeek + ONE_DAY_MILLISECONDS * TOTAL_DAYS_PER_WEEK)
  }

  return {
    goPrevWeek,
    goNextWeek,
    intervalWidth,
    weeklyCalendarRef,
    weekDays,
    monthLabel,
    yearLabel,
  }
}

export default useWeeklyCalendar
