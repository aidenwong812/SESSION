const getMonthByName = (monthName) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const month = monthNames.indexOf(monthName) + 1

  return month
}

export default getMonthByName
