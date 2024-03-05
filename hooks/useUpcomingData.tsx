import { useEffect, useState } from "react"
import getBookedSessions from "@/lib/getBookedSessions"

const useUpcomingData = () => {
  const [upcomingSessions, setUpcomingSessions] = useState([])

  const demoStartTime = 1704481866120
  const demoEndTime = 1705368325894
  const demoStudioId = "NxF6DdmLzXBbasVFUf67"

  useEffect(() => {
    const init = async () => {
      const response = await getBookedSessions(demoStartTime, demoEndTime, demoStudioId)
      setUpcomingSessions(response)
    }

    init()
  }, [])

  return {
    upcomingSessions,
  }
}

export default useUpcomingData
