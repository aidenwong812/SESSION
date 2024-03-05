const convertTo24HourFormat = (time12h) => {
  const [time, period] = time12h.split(/(?=[AP]M)/)
  const [hour, minute] = time.split(":")
  let convertedHour = parseInt(hour, 10)

  if (period === "PM" && convertedHour < 12) {
    convertedHour += 12
  } else if (period === "AM" && convertedHour === 12) {
    convertedHour = 0
  }

  const formattedHour = String(convertedHour).padStart(2, "0")
  return `${formattedHour}:${minute}`
}

export default convertTo24HourFormat
