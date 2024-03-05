import { TOTAL_SESSION_DAY_PERIOD_SECONDS } from "./consts/global"
import formatLocalTimeString from "./formatLocalTimeString"
import getSplitTimeRange from "./getSplitTimeRanges"
import parseISOString from "./parseISOString"

const getDisabledDays = (studioEventsList, currentYear, currentMonth) => {
  const groupedData = studioEventsList.reduce((acc, curr) => {
    const splitTimeRanges = getSplitTimeRange(curr.start, curr.end, currentYear, currentMonth)

    splitTimeRanges.forEach((range) => {
      const rangeStart = new Date(range.start)
      const rangeEnd = new Date(range.start)
      rangeStart.setHours(10, 0, 0)
      rangeEnd.setHours(21, 0, 0)

      const curStartDay = range.start
      const curEndDay = range.end

      const startDate = parseISOString(formatLocalTimeString(rangeStart))
      const endDate = parseISOString(formatLocalTimeString(rangeEnd))
      const curStartDate = parseISOString(curStartDay)
      const curEndDate = parseISOString(curEndDay)

      const overlapStart = Math.max(startDate, curStartDate)
      const overlapEnd = Math.min(endDate, curEndDate)

      const duration = Math.max(0, overlapEnd - overlapStart)

      const totalSeconds = duration / 1000

      const dateKey = rangeStart.getDate()
      acc[dateKey] = (acc[dateKey] || 0) + totalSeconds
    })

    return acc
  }, {})

  const disabledDays = Object.entries(groupedData).filter(
    (data: any) => data[1] >= TOTAL_SESSION_DAY_PERIOD_SECONDS,
  )

  return disabledDays.map((day) => parseInt(day[0], 10))
}

export default getDisabledDays
