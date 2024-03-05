import convertDecimalDigit from "./convetDecimalDigit"
import getPeriodTime from "./getPeriodTime"

const getMontlyEvent = (event, startDay) => {
  const eventStartDateTime = new Date(`${event.start?.dateTime || event.start?.date}`)
  const eventEndDateTime = new Date(`${event.end?.dateTime || event.end?.date}`)

  const periodTime = getPeriodTime(eventStartDateTime, eventEndDateTime)

  const startDateTime = new Date(startDay)
  const realStartDateTime = `${startDateTime.getUTCFullYear()}-${convertDecimalDigit(
    startDateTime.getMonth() + 1,
  )}-${convertDecimalDigit(eventStartDateTime.getUTCDate())}`
  const realEndDateTime = new Date(new Date(`${realStartDateTime}`).getTime() + periodTime)

  return [
    {
      start: realStartDateTime,
      end: `${startDateTime.getUTCFullYear()}-${convertDecimalDigit(
        realEndDateTime.getMonth() + 1,
      )}-${convertDecimalDigit(realEndDateTime.getUTCDate())}`,
      summary: event?.summary || "",
    },
  ]
}

export default getMontlyEvent
