const getWeekdayInfo = (year, monthDigit, dayOffset) =>
  new Date(year, monthDigit - 1, dayOffset).getDay()

export default getWeekdayInfo
