import { ONE_DAY_MILLISECONDS } from "@/lib/consts/global"

const useCurrentDateTime = () => {
  const currentDateTime = new Date()
  const currentYear = currentDateTime.getFullYear()
  const currentMonth = currentDateTime.getMonth()
  const currentDate = currentDateTime.getDate()
  const currentWeekDay = currentDateTime.getDay()
  const today12AM = new Date(currentYear, currentMonth, currentDate, 0, 0, 0).getTime()
  const tomorrow12AM = today12AM + ONE_DAY_MILLISECONDS

  return {
    today12AM,
    currentWeekDay,
    currentYear,
    currentMonth,
    currentDateTime,
    currentDate,
    tomorrow12AM,
  }
}

export default useCurrentDateTime
