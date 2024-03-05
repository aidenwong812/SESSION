const getDisplayTime = (time) => {
  if (!time) return null

  const timePrefix = time.slice(0, 2)
  const formattedPrefix = timePrefix[0] === "0" ? timePrefix[1] : timePrefix
  const period = time.slice(time.length - 2, time.length)

  return {
    time: formattedPrefix,
    periodOfDay: period,
  }
}

export default getDisplayTime
