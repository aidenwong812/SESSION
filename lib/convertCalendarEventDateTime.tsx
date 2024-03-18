const convertCalendarEventDateTime = (dateTime) =>
  new Date(dateTime).toISOString().replace(/[-:]/g, "")

export default convertCalendarEventDateTime
