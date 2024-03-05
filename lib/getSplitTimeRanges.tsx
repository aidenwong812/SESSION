import { ONE_DAY_MILLISECONDS } from "./consts/global"

const getSplitTimeRange = (startDay, endDay, currentYear, currentMonth) => {
  const startDate = new Date(startDay)
  const endDate = new Date(endDay)
  const intervals = []

  let currentDate = new Date(startDate.getTime())

  while (currentDate < endDate) {
    const nextDate = new Date(currentDate.getTime() + ONE_DAY_MILLISECONDS)
    nextDate.setHours(0, 0, 0, 0)

    const intervalEnd = nextDate >= endDate ? endDate : nextDate

    intervals.push({
      start: currentDate,
      end: intervalEnd,
    })

    currentDate = new Date(nextDate.getTime())
  }

  return intervals.filter((range) => {
    const startDateTime = new Date(range.start)

    const startDayYear = startDateTime.getFullYear()
    const startDayMonth = startDateTime.getMonth() + 1

    return (
      startDayYear === parseInt(currentYear, 10) && startDayMonth === parseInt(currentMonth, 10)
    )
  })
}

export default getSplitTimeRange
