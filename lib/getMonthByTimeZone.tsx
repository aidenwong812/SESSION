const getMonthByTimeZone = (dateTime, timeZone) => {
  const monthValue = new Intl.DateTimeFormat("en-US", { timeZone, month: "2-digit" }).format(
    dateTime,
  )
  return monthValue
}

export default getMonthByTimeZone
