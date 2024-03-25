const getEndOfDayDate = () => {
  const currentDate = new Date()
  const endOfDay = new Date(currentDate)
  endOfDay.setHours(23, 59, 59, 999)
  return endOfDay.getTime()
}

export default getEndOfDayDate
