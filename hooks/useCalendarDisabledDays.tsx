import { useEffect, useState } from "react"
import getDisabledDays from "@/lib/getDisabledDays"
import getDisabledTimes from "@/lib/getDisabledTimes"
import { STEPS } from "@/lib/consts/bookSession"
import { useBookSession } from "@/providers/BookSessionProvider"

const useCalendarDisabledDays = (studioEventsList, currentYear, currentMonth, selectedDay) => {
  const [disabledDays, setDisabledDays] = useState([])
  const { curStep } = useBookSession()
  const [disabledStartTimes, setDisabledStartTimes] = useState([])
  const [disabledEndTimes, setDisabledEndTimes] = useState([])

  useEffect(() => {
    const days = getDisabledDays(studioEventsList, currentYear, currentMonth)
    const formattedDisabledDays = days.map((day) => ({
      year: parseInt(currentYear, 10),
      month: currentMonth,
      day,
    }))
    setDisabledDays(formattedDisabledDays)
  }, [studioEventsList, currentMonth, currentYear])

  useEffect(() => {
    if (curStep === STEPS.CHOOSE_TIME || curStep === STEPS.CHOOSE_TIME_START) {
      const times = getDisabledTimes(studioEventsList, selectedDay)
      setDisabledStartTimes(times.startDisabledTimes)
      setDisabledEndTimes(times.endDisabledTimes)
    }
  }, [curStep, currentYear, currentMonth, studioEventsList, selectedDay])

  return { disabledDays, disabledEndTimes, disabledStartTimes }
}

export default useCalendarDisabledDays
