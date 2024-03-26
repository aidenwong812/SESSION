import { useEffect, useState } from "react"
import getBookedSessions from "@/lib/getBookedSessions"
import { useAuth } from "@/providers/AuthProvider"
import { DEFAULT_STUDIO_ID, ONE_DAY_MILLISECONDS } from "@/lib/consts/global"
import getEndOfDayDate from "@/lib/getEndOfDayDate"

const useUpcomingData = () => {
  const [upcomingSessions, setUpcomingSessions] = useState([])
  const { userData } = useAuth()

  const startTime = Date.now()
  const endTime = getEndOfDayDate()
  const studioId = userData?.studioId || DEFAULT_STUDIO_ID

  const currentDate = Date.now()

  const upcomingDays = Array.from({ length: 3 }, (_i, index) => {
    const epochTime = currentDate + ONE_DAY_MILLISECONDS * index
    const dateTime = new Date(epochTime)
    const monthDigit = dateTime.getMonth()

    return {
      year: dateTime.getFullYear(),
      month: monthDigit + 1,
      day: dateTime.getDate(),
    }
  })

  useEffect(() => {
    const init = async () => {
      const response = await getBookedSessions(startTime, endTime, studioId)
      setUpcomingSessions(response)
    }

    init()
  }, [])

  return {
    upcomingSessions,
    upcomingDays,
  }
}

export default useUpcomingData
