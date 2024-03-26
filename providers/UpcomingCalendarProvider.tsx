import React, { createContext, useContext, useMemo } from "react"
import { useMeasure } from "react-use"
import useUpcomingData from "@/hooks/useUpcomingData"

const UpcomingCalendarContext = createContext(null)

const UpcomingCalendarProvider = ({ children }) => {
  const [calendarRef, { width }] = useMeasure()
  const intervalWidth = width ? (width - 120) / 16 : 0
  const upcomingData = useUpcomingData()

  const value = useMemo(
    () => ({
      calendarRef,
      intervalWidth,
      ...upcomingData,
    }),
    [calendarRef, intervalWidth, upcomingData],
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
