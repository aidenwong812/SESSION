const getWeekDayFromRule = (event, timeZone) => {
  const eventRule = event.recurrence[0]
  const startDate = event?.start?.dateTime || event?.start?.date
  const daysMatch = eventRule.match(/BYDAY=([A-Z,]+)/)

  const dateInTimeZone = new Intl.DateTimeFormat("en-US", { timeZone, weekday: "long" }).format(
    new Date(startDate),
  )
  const BYDay = dateInTimeZone.slice(0, 2).toUpperCase()

  if (daysMatch && daysMatch.length > 1) {
    const daysString = daysMatch[1]
    const daysArray = daysString.split(",")
    return daysArray
  }

  return [BYDay]
}

export default getWeekDayFromRule
