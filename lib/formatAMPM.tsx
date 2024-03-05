function formatAMPM(date) {
  let hours = date.getHours()
  const ampm = hours >= 12 ? "pm" : "am"
  hours %= 12
  hours = hours || 12
  const strTime = `${hours < 10 ? `0${hours}` : hours}:00${ampm}`
  return strTime
}

export default formatAMPM
