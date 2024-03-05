import { useEffect, useState } from "react"
import getEventsByDay from "@/lib/getEventsByDay"

const useCalendarDayEvents = (date, studioId) => {
  const [events, setEvents] = useState([]) as any

  useEffect(() => {
    const init = async () => {
      const response = await getEventsByDay(date, studioId)
      const { error } = response as any
      if (error) return
      setEvents(response)
    }

    if (!date || !studioId) return
    init()
  }, [date, studioId])

  return {
    events,
  }
}

export default useCalendarDayEvents
