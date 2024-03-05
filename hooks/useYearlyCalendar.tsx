import { useState } from "react"

const useYearlyCalendar = () => {
  const currentDateTime = new Date()
  const thisYear = currentDateTime.getFullYear()
  const [yearlyCalendarYear, setYearlyCalendarYear] = useState(thisYear)

  const goNextYear = () => setYearlyCalendarYear(yearlyCalendarYear + 1)
  const goPrevYear = () => setYearlyCalendarYear(yearlyCalendarYear - 1)

  return {
    yearlyCalendarYear,
    goNextYear,
    goPrevYear,
  }
}

export default useYearlyCalendar
