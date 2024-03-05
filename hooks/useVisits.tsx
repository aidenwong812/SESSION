import { useEffect, useState } from "react"
import getVisitsCount from "@/lib/getVisitsCount"
import { ONE_DAY_MILLISECONDS, TOTAL_DAYS_PER_WEEK } from "@/lib/consts/global"
import useCurrentDateTime from "./useCurrentDateTime"

export enum VISIT_PERIOD {
  TODAY = "TODAY",
  WEEK = "WEEK",
  MONTH = "MONTH",
}

const useVisits = () => {
  const [selectedVisitPeriod, setSelectedVisitPeriod] = useState(VISIT_PERIOD.TODAY)
  const [todayVisitsCount, setTodayVisitsCount] = useState(0)
  const [weekVisitsCount, setWeekVisitsCount] = useState(0)
  const [monthVisitsCount, setMonthVisitsCount] = useState(0)
  const [displayVisitsCount, setDisplayVisitsCount] = useState(0)

  const isActiveTodayOfVisit = selectedVisitPeriod === VISIT_PERIOD.TODAY
  const isActiveWeekOfVisit = selectedVisitPeriod === VISIT_PERIOD.WEEK
  const isActiveMonthOfVisit = selectedVisitPeriod === VISIT_PERIOD.MONTH

  const { today12AM, currentWeekDay, tomorrow12AM } = useCurrentDateTime()

  const getTodayVisitCount = async () => {
    const totalTodayCount = await getVisitsCount(today12AM, tomorrow12AM)
    setTodayVisitsCount(totalTodayCount)
  }

  const getWeeklyVisitCount = async () => {
    const sunday12AM = today12AM - currentWeekDay * ONE_DAY_MILLISECONDS
    const nextSunday12AM = today12AM + (TOTAL_DAYS_PER_WEEK - currentWeekDay) * ONE_DAY_MILLISECONDS

    const totalWeekCount = await getVisitsCount(sunday12AM, nextSunday12AM)
    setWeekVisitsCount(totalWeekCount)
  }

  const getMonthlyVisitCount = async () => {
    const past30DayTime = tomorrow12AM - 30 * ONE_DAY_MILLISECONDS

    const totalMonthCount = await getVisitsCount(past30DayTime, tomorrow12AM)

    setMonthVisitsCount(totalMonthCount)
  }

  useEffect(() => {
    const init = async () => {
      getTodayVisitCount()
      getWeeklyVisitCount()
      getMonthlyVisitCount()
    }

    init()
  }, [])

  useEffect(() => {
    if (selectedVisitPeriod === VISIT_PERIOD.TODAY) setDisplayVisitsCount(todayVisitsCount)
    if (selectedVisitPeriod === VISIT_PERIOD.WEEK) setDisplayVisitsCount(weekVisitsCount)
    if (selectedVisitPeriod === VISIT_PERIOD.MONTH) setDisplayVisitsCount(monthVisitsCount)
  }, [selectedVisitPeriod, todayVisitsCount, weekVisitsCount, monthVisitsCount])

  return {
    isActiveMonthOfVisit,
    isActiveTodayOfVisit,
    isActiveWeekOfVisit,
    setSelectedVisitPeriod,
    displayVisitsCount,
  }
}

export default useVisits
