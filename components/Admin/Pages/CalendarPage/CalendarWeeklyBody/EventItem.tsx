import { useEffect, useState } from "react"
import { useAdminCalendar } from "@/providers/AdminCalendarProvider"
import { eventTimesInFirestore } from "@/lib/consts/bookSession"
import CalendarEvent from "../../CalendarEvent"

const EventItem = ({ isSession = true, data }) => {
  const { intervalWidth } = useAdminCalendar()

  const [startTimeIndex, setStartTimeIndex] = useState(0)
  const [timePeriod, setTimePeriod] = useState(0)

  useEffect(() => {
    const startTime = data.event.start.dateTime.slice(-8)
    const endTime = data.event.end.dateTime.slice(-8)
    const startIndex = eventTimesInFirestore.findIndex((time) => time === startTime)
    const endIndex = eventTimesInFirestore.findIndex((time) => time === endTime)
    const period = endIndex - startIndex

    setStartTimeIndex(startIndex)
    setTimePeriod(period)
  }, [data])

  return (
    <div
      className="absolute top-0 h-full"
      style={{
        left: `${intervalWidth * startTimeIndex}px`,
        width: `${intervalWidth * timePeriod}px`,
      }}
    >
      <CalendarEvent isSession={isSession} />
    </div>
  )
}

export default EventItem
