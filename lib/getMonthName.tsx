function getMonthName(monthNumber) {
  const date = new Date()
  date.setMonth(monthNumber - 1)

  return date.toLocaleString("en-US", {
    month: "short",
  })
}

export default getMonthName
