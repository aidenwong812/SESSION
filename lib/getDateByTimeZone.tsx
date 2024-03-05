const getDateByTimeZone = (dateTime, timeZone) => {
  const dayValue = new Intl.DateTimeFormat("en-US", { timeZone, day: "2-digit" }).format(dateTime)
  return dayValue
}

export default getDateByTimeZone
