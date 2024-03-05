import { useEffect, useState } from "react"
import getDate from "@/lib/getDate"
import formatAMPM from "@/lib/formatAMPM"
import { ONE_HOUR_MILLISECONDS } from "@/lib/consts/global"
import { availableTimes } from "@/lib/consts/bookSession"

const useCalendarSelectedTime = () => {
  const [selectedDay, setSelectedDay] = useState(null)
  const [selectedStartTime, setSelectedStartTime] = useState(0)
  const [selectedEndTime, setSelectedEndTime] = useState(0)
  const [enabledTimeIndex, setEnabledTimeIndex] = useState(0)

  useEffect(() => {
    if (selectedDay) {
      const date = getDate(selectedDay)
      if (selectedDay.day !== new Date().getDate()) {
        setEnabledTimeIndex(0)
        return
      }
      const currentTime = formatAMPM(new Date(date.getTime() + ONE_HOUR_MILLISECONDS))
      const enabledIndex = availableTimes.findIndex(
        (time) => time.toLocaleLowerCase() === currentTime.toLocaleLowerCase(),
      )
      setEnabledTimeIndex(enabledIndex >= 0 ? enabledIndex : 0)
    }
  }, [selectedDay])

  return {
    enabledTimeIndex,
    selectedDay,
    setSelectedDay,
    selectedStartTime,
    setSelectedStartTime,
    selectedEndTime,
    setSelectedEndTime,
  }
}

export default useCalendarSelectedTime
