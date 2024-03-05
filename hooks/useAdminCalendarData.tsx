import { useEffect, useState } from "react"
import getStudios from "@/lib/firebase/getStudios"

export const AdminCalendarViewTypes = [
  {
    label: "Month",
    value: "Month",
  },
  {
    label: "Week",
    value: "Week",
  },
  {
    label: "Year",
    value: "Year",
  },
]

const useAdminCalendarData = () => {
  const [selectedStudio, setSelectedStudio] = useState(null)
  const [selectedViewType, setSelectedViewType] = useState(AdminCalendarViewTypes[0])
  const [studioList, setStudioList] = useState([]) as any

  const isMonthlyCalendar = selectedViewType.value === AdminCalendarViewTypes[0].value
  const isWeeklyCalendar = selectedViewType.value === AdminCalendarViewTypes[1].value
  const isYearlyCalendar = selectedViewType.value === AdminCalendarViewTypes[2].value

  useEffect(() => {
    const init = async () => {
      const response = await getStudios()
      const { error } = response as any

      if (error) return

      setStudioList(response)
      setSelectedStudio(response[0])
    }

    init()
  }, [])

  return {
    setSelectedStudio,
    selectedStudio,
    selectedViewType,
    setSelectedViewType,
    isMonthlyCalendar,
    isWeeklyCalendar,
    isYearlyCalendar,
    studioList,
  }
}

export default useAdminCalendarData
