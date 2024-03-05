import React, { createContext, useContext, useMemo } from "react"
import { useMeasure } from "react-use"

const UpcomingCalendarContext = createContext(null)

const UpcomingCalendarProvider = ({ children }) => {
  const [calendarRef, { width }] = useMeasure()
  const intervalWidth = width ? (width - 120) / 16 : 0

  const value = useMemo(
    () => ({
      calendarRef,
      intervalWidth,
    }),
    [calendarRef, intervalWidth],
  )

  return (
    <UpcomingCalendarContext.Provider value={value}>{children}</UpcomingCalendarContext.Provider>
  )
}

export const useUpcomingCalendar = () => {
  const context = useContext(UpcomingCalendarContext)
  if (!context) {
    throw new Error("useUpcomingCalendar must be used within a UpcomingCalendarProvider")
  }
  return context
}

export default UpcomingCalendarProvider
