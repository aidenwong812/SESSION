import { createContext, useContext, useMemo, useState } from "react"
import useMonthlyCalendar from "@/hooks/useMonthlyCalendar"
import useAdminCalendarData from "@/hooks/useAdminCalendarData"
import useWeeklyCalendar from "@/hooks/useWeeklyCalendar"
import useYearlyCalendar from "@/hooks/useYearlyCalendar"

const AdminCalendarContext = createContext(null)

const AdminCalendarProvider = ({ children }) => {
  const monthCalendarData = useMonthlyCalendar()
  const adminCalendarData = useAdminCalendarData()
  const weeklyCalendarData = useWeeklyCalendar()
  const yearlyCalendarData = useYearlyCalendar()
  const [selectedEvent, setSelectedEvent] = useState({})

  const value = useMemo(
    () => ({
      ...monthCalendarData,
      ...adminCalendarData,
      ...weeklyCalendarData,
      ...yearlyCalendarData,
      selectedEvent,
      setSelectedEvent,
    }),
    [
      monthCalendarData,
      adminCalendarData,
      weeklyCalendarData,
      yearlyCalendarData,
      selectedEvent,
      setSelectedEvent,
    ],
  )

  return <AdminCalendarContext.Provider value={value}>{children}</AdminCalendarContext.Provider>
}

export const useAdminCalendar = () => {
  const context = useContext(AdminCalendarContext)
  if (!context) {
    throw new Error("useAdminCalendar must be used within a AdminCalendarProvider")
  }
  return context
}

export default AdminCalendarProvider
