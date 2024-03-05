const getDateInfo = (year, monthDigit, dayOffset) =>
  new Date(year, monthDigit - 1, dayOffset).getDate()

export default getDateInfo
