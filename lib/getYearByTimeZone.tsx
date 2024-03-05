const getYearByTimeZone = (dateTime, timeZone) => {
  const yearValue = new Intl.DateTimeFormat("en-US", { timeZone, year: "numeric" }).format(dateTime)
  return yearValue
}

export default getYearByTimeZone
