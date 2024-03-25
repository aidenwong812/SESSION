import { useEffect, useState } from "react"
import getBookedSessions from "@/lib/getBookedSessions"
import { useAuth } from "@/providers/AuthProvider"
import { DEFAULT_STUDIO_ID } from "@/lib/consts/global"
import getEndOfDayDate from "@/lib/getEndOfDayDate"

const useUpcomingData = () => {
  const [upcomingSessions, setUpcomingSessions] = useState([])
  const { userData } = useAuth()

  const startTime = Date.now()
  const endTime = getEndOfDayDate()
  const studioId = userData?.studioId || DEFAULT_STUDIO_ID

  useEffect(() => {
    const init = async () => {
      const response = await getBookedSessions(startTime, endTime, studioId)
      setUpcomingSessions(response)
    }

    init()
  }, [])

  return {
    upcomingSessions,
  }
}

export default useUpcomingData
