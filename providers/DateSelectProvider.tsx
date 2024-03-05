import React, { createContext, useContext, useMemo } from "react"
import useCalendarEvents from "../hooks/useCalendarEvents"
import useCalendarDisabledDays from "../hooks/useCalendarDisabledDays"
import useCalendarSelectedTime from "../hooks/useCalendarSelectedTime"

const DateSelectContext = createContext(null)

const DateSelectProvider = ({ children }) => {
  const { calendarRef, currentMonth, currentYear, studioEventsList, fetchSessionCalendarEvents } =
    useCalendarEvents()
  const {
    enabledTimeIndex,
    selectedDay,
    setSelectedDay,
    selectedStartTime,
    setSelectedStartTime,
    selectedEndTime,
    setSelectedEndTime,
  } = useCalendarSelectedTime()
  const { disabledDays, disabledEndTimes, disabledStartTimes } = useCalendarDisabledDays(
    studioEventsList,
    currentYear,
    currentMonth,
    selectedDay,
  )

  const value = useMemo(
    () => ({
      fetchSessionCalendarEvents,
      selectedDay,
      setSelectedDay,
      selectedStartTime,
      setSelectedStartTime,
      setSelectedEndTime,
      selectedEndTime,
      enabledTimeIndex,
      calendarRef,
      disabledDays,
      disabledStartTimes,
      disabledEndTimes,
    }),
    [
      fetchSessionCalendarEvents,
      selectedDay,
      setSelectedDay,
      selectedStartTime,
      setSelectedStartTime,
      setSelectedEndTime,
      selectedEndTime,
      enabledTimeIndex,
      calendarRef,
      disabledDays,
      disabledStartTimes,
      disabledEndTimes,
    ],
  )

  return <DateSelectContext.Provider value={value}>{children}</DateSelectContext.Provider>
}

export const useDateSelect = () => {
  const context = useContext(DateSelectContext)
  if (!context) {
    throw new Error("useDateSelect must be used within a DateSelectProvider")
  }
  return context
}

export default DateSelectProvider
