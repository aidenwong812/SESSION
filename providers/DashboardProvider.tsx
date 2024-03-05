import { createContext, useContext, useMemo } from "react"
import useUpcomingData from "@/hooks/useUpcomingData"
import useTotalBookedData from "@/hooks/useTotalBookedData"
import useVisits from "@/hooks/useVisits"
import useTotalRevenueData from "../hooks/useTotalRevenueData"

const DashboardContext = createContext(null)

const DashboardProvider = ({ children }) => {
  const upcomingData = useUpcomingData()
  const totalBookings = useTotalBookedData()
  const totalRevenueData = useTotalRevenueData()
  const visits = useVisits()

  const value = useMemo(
    () => ({
      ...upcomingData,
      ...totalBookings,
      ...visits,
      ...totalRevenueData,
    }),
    [upcomingData, visits, totalBookings, totalRevenueData],
  )

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>
}

export const useDashboard = () => {
  const context = useContext(DashboardContext)
  if (!context) {
    throw new Error("useDashboard must be used within a DashboardProvider")
  }
  return context
}

export default DashboardProvider
