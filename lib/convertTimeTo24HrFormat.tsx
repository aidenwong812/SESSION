const convertTimeTo24HrFormat = (timeString) => {
  const [hourStr, minuteStr] = timeString.split(":")
  let hour = parseInt(hourStr, 10)
  const minute = parseInt(minuteStr, 10)

  if (timeString.includes("PM") && hour !== 12) hour += 12
  if (timeString.includes("AM") && hour === 12) hour = 0

  return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`
}

export default convertTimeTo24HrFormat
