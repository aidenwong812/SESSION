const convertComparableDate = (time24Hr) => {
  const shouldNextDay = time24Hr === "00:00" || time24Hr === "01:00"
  return new Date(`2001-01-0${shouldNextDay ? "2" : "1"} ${time24Hr}:00`)
}

export default convertComparableDate
