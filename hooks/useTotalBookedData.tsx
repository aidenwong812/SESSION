import { useEffect, useState } from "react"
import getBookedProjectsCount from "@/lib/getBookedProjectsCount"
import getBookedSessionsCount from "@/lib/getBookedSessionsCount"

const useTotalBookedData = () => {
  const [totalSessionsCount, setTotalSessionsCount] = useState([])
  const [totalProjectsCount, setTotalProjectsCount] = useState([])

  useEffect(() => {
    const init = async () => {
      const sessionsCount = await getBookedSessionsCount()
      setTotalSessionsCount(sessionsCount)
      const projectsCount = await getBookedProjectsCount()
      setTotalProjectsCount(projectsCount)
    }

    init()
  }, [])

  return {
    totalSessionsCount,
    totalProjectsCount,
  }
}

export default useTotalBookedData
