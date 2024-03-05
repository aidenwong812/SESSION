import { useMemo } from "react"
import useIsMobile from "./useIsMobile"

const useDateLocale = () => {
  const isMobile = useIsMobile()

  const locale = useMemo(
    () => ({
      months: [
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
      ],

      weekDays: [
        {
          name: "Monday",
          short: isMobile ? "M" : "MON",
        },
        {
          name: "Tuesday",
          short: isMobile ? "T" : "TUE",
        },
        {
          name: "Wednesday",
          short: isMobile ? "W" : "WED",
        },
        {
          name: "Thursday",
          short: isMobile ? "T" : "THU",
        },
        {
          name: "Friday",
          short: isMobile ? "F" : "FRI",
        },
        {
          name: "Saturday",
          short: isMobile ? "S" : "SAT",
          isWeekend: true,
        },
        {
          name: "Sunday",
          short: isMobile ? "S" : "SUN",
          isWeekend: true,
        },
      ],
      weekStartingIndex: 6,
      getToday(gregorainTodayObject) {
        return gregorainTodayObject
      },
      toNativeDate(date) {
        return new Date(date.year, date.month - 1, date.day)
      },
      getMonthLength(date) {
        return new Date(date.year, date.month, 0).getDate()
      },
      transformDigit(digit) {
        return digit
      },
      nextMonth: "Next Month",
      previousMonth: "Previous Month",
      openMonthSelector: "Open Month Selector",
      openYearSelector: "Open Year Selector",
      closeMonthSelector: "Close Month Selector",
      closeYearSelector: "Close Year Selector",
      defaultPlaceholder: "Select...",

      from: "from",
      to: "to",

      digitSeparator: ",",

      // if your provide -2 for example, year will be 2 digited
      yearLetterSkip: 0,

      isRtl: false,
    }),
    [isMobile],
  )

  return {
    locale,
  }
}

export default useDateLocale
