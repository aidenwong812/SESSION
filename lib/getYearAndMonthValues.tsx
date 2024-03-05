const getYearAndMonthValues = (calendarRef) => {
  const yearElement = calendarRef.current.querySelector(
    ".Calendar__monthYear.-shown .Calendar__yearText",
  )
  const monthElement = calendarRef.current.querySelector(
    ".Calendar__monthYear.-shown .Calendar__monthText",
  )

  const year = yearElement ? yearElement.textContent : ""
  const month = monthElement ? monthElement.textContent : ""

  return { year, month }
}

export default getYearAndMonthValues
