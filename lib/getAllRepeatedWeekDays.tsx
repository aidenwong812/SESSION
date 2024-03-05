import { ONE_DAY_MILLISECONDS } from "./consts/global"
import getBYDay from "./getBYDay"
import getDateByTimeZone from "./getDateByTimeZone"
import getMonthByTimeZone from "./getMonthByTimeZone"
import getYearByTimeZone from "./getYearByTimeZone"

const getAllRepeatedWeekDays = (weekDays, startDay, endDay, timeZone) => {
  const weekdaysInMonth = []

  let startDate = new Date(startDay)
  const endDate = new Date(endDay)

  while (startDate.getTime() < endDate.getTime()) {
    const BYDay = getBYDay(startDate, timeZone)
    const weekDayYear = getYearByTimeZone(startDate, timeZone)
    const weekDayMonth = getMonthByTimeZone(startDate, timeZone)
    const weekDayDate = getDateByTimeZone(startDate, timeZone)

    if (weekDays.includes(BYDay)) {
      weekdaysInMonth.push(`${weekDayYear}-${weekDayMonth}-${weekDayDate}T`)
    }

    startDate = new Date(new Date(startDate).getTime() + ONE_DAY_MILLISECONDS)
  }

  return weekdaysInMonth
}

export default getAllRepeatedWeekDays
