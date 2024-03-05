import { useEffect, useState } from "react"
import { ONE_DAY_MILLISECONDS, TOTAL_DAYS_PER_WEEK } from "../lib/consts/global"
import getRevenueAmountByPeriod from "../lib/getRevenueAmountByPeriod"
import useCurrentDateTime from "./useCurrentDateTime"

export enum REVENUE_PERIOD {
  TODAY = "TODAY",
  WEEK = "WEEK",
  MONTH = "MONTH",
}

const useTotalRevenueData = () => {
  const [selectedRevenuePeriod, setSelectedRevenuePeriod] = useState(REVENUE_PERIOD.TODAY)
  const [todayRevenueAmount, setTodayRevenueAmount] = useState(0)
  const [weekRevenueAmount, setWeekRevenueAmount] = useState(0)
  const [monthRevenueAmount, setMonthRevenueAmount] = useState(0)
  const [displayAmount, setDisplayAmount] = useState(0)

  const { today12AM, currentWeekDay, tomorrow12AM } = useCurrentDateTime()

  const isActiveTodayOfRevenue = selectedRevenuePeriod === REVENUE_PERIOD.TODAY
  const isActiveWeekOfRevenue = selectedRevenuePeriod === REVENUE_PERIOD.WEEK
  const isActiveMonthOfRevenue = selectedRevenuePeriod === REVENUE_PERIOD.MONTH

  const getTodayTotalRevenue = async () => {
    const totalTodayAmount = await getRevenueAmountByPeriod(today12AM, tomorrow12AM)
    setTodayRevenueAmount(totalTodayAmount)
  }

  const getWeekTotalRevenue = async () => {
    const sunday12AM = today12AM - currentWeekDay * ONE_DAY_MILLISECONDS
    const nextSunday12AM = today12AM + (TOTAL_DAYS_PER_WEEK - currentWeekDay) * ONE_DAY_MILLISECONDS

    const totalWeekAmount = await getRevenueAmountByPeriod(sunday12AM, nextSunday12AM)
    setWeekRevenueAmount(totalWeekAmount)
  }

  const getMonthTotalReveue = async () => {
    const past30DayTime = tomorrow12AM - 30 * ONE_DAY_MILLISECONDS

    const totalMonthAmount = await getRevenueAmountByPeriod(past30DayTime, tomorrow12AM)

    setMonthRevenueAmount(totalMonthAmount)
  }

  useEffect(() => {
    const init = async () => {
      getTodayTotalRevenue()
      getWeekTotalRevenue()
      getMonthTotalReveue()
    }

    init()
  }, [])

  useEffect(() => {
    if (selectedRevenuePeriod === REVENUE_PERIOD.TODAY) setDisplayAmount(todayRevenueAmount)
    if (selectedRevenuePeriod === REVENUE_PERIOD.WEEK) setDisplayAmount(weekRevenueAmount)
    if (selectedRevenuePeriod === REVENUE_PERIOD.MONTH) setDisplayAmount(monthRevenueAmount)
  }, [selectedRevenuePeriod, todayRevenueAmount, weekRevenueAmount, monthRevenueAmount])

  return {
    isActiveTodayOfRevenue,
    isActiveWeekOfRevenue,
    isActiveMonthOfRevenue,
    setSelectedRevenuePeriod,
    displayAmount,
  }
}

export default useTotalRevenueData
