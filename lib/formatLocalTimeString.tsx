import getLocalTimeZone from "./getLocalTimeZone"

const formatLocalTimeString = (date) => {
  const userTimeZone = getLocalTimeZone()

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: userTimeZone,
  } as any

  const formatter = new Intl.DateTimeFormat("en-US", options)

  return formatter?.format?.(date)
}

export default formatLocalTimeString
