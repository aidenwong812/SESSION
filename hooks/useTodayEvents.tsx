import { useEffect, useState } from "react"
import getStudioEventsByDay from "@/lib/getStudioEventsByDay"

const useTodayEvents = (studioId) => {
  const [events, setEvents] = useState([]) as any

  useEffect(() => {
    const init = async () => {
      const currentDate = new Date()
      const date = {
        day: currentDate.getDate(),
        month: currentDate.getMonth() + 1,
        year: currentDate.getFullYear(),
      }
      const response = await getStudioEventsByDay(date, studioId)
      const { error } = response as any
      if (error) return
      setEvents(response)
    }

    if (!studioId) return
    init()
  }, [studioId])

  return {
    events,
  }
}

export default useTodayEvents
