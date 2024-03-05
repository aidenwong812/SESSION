import getDate from "./getDate"

function getWeekDay(day) {
  if (!day) return ""

  const date = getDate(day)

  return date.toLocaleString("en-US", {
    weekday: "long",
  })
}

export default getWeekDay
