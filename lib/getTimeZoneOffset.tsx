const getTimeZoneOffset = () => {
  const currentDate = new Date()
  const timeZoneOffsetMinutes = currentDate.getTimezoneOffset()

  const offsetHours = Math.floor(timeZoneOffsetMinutes / 60)

  return offsetHours
}

export default getTimeZoneOffset
