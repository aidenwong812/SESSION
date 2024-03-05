import getLocalTimeZone from "./getLocalTimeZone"

const convertTimeFormat = (timeString) => {
  const date = new Date(timeString)

  const userTimeZone = getLocalTimeZone()

  return date.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: userTimeZone,
  })
}

export default convertTimeFormat
