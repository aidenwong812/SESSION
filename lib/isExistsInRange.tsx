import convertTimeTo24HrFormat from "./convertTimeTo24HrFormat"
import convertComparableDate from "./convertComparableDate"

const isExistsInRange = (timeRange, comparableStartDate, comparableEndDate) => {
  const start24Hrs = convertTimeTo24HrFormat(timeRange.start)
  const end24Hrs = convertTimeTo24HrFormat(timeRange.end)

  const rangeStartComparableDate = convertComparableDate(start24Hrs)
  const rangeEndComparableDate = convertComparableDate(end24Hrs)

  return (
    (rangeStartComparableDate.getTime() <= comparableEndDate.getTime() &&
      rangeEndComparableDate.getTime() >= comparableStartDate.getTime()) ||
    (comparableStartDate.getTime() <= rangeEndComparableDate.getTime() &&
      comparableEndDate.getTime() >= rangeStartComparableDate.getTime())
  )
}

export default isExistsInRange
