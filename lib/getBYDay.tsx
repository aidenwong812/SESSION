const getBYDay = (dateTime, timeZone) => {
  const dateInTimeZone = new Intl.DateTimeFormat("en-US", { timeZone, weekday: "long" }).format(
    dateTime,
  )
  const BYDay = dateInTimeZone.slice(0, 2).toUpperCase()

  return BYDay
}

export default getBYDay
