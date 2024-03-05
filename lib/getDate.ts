const getDate = (selectedDay) => {
  const date = new Date()
  date.setMonth(selectedDay.month - 1 || 1)
  date.setFullYear(selectedDay.year || 1997)
  date.setDate(selectedDay.day || 1)

  return date
}

export default getDate
