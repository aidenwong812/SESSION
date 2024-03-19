import { useEffect, useState } from "react"
import getRoomsByStudioId from "@/lib/firebase/getRoomsByStudioId"
import { DEFAULT_STUDIO_ID } from "@/lib/consts/global"

export const AdminCalendarViewTypes = [
  {
    label: "Week",
    value: "Week",
  },
  {
    label: "Month",
    value: "Month",
  },
  {
    label: "Year",
    value: "Year",
  },
]

const useAdminCalendarData = () => {
  const [selectedRoom, setSelectedRoom] = useState(null)
  const [selectedViewType, setSelectedViewType] = useState(AdminCalendarViewTypes[1])
  const [roomList, setRoomList] = useState([]) as any

  const isWeeklyCalendar = selectedViewType.value === AdminCalendarViewTypes[0].value
  const isMonthlyCalendar = selectedViewType.value === AdminCalendarViewTypes[1].value
  const isYearlyCalendar = selectedViewType.value === AdminCalendarViewTypes[2].value

  useEffect(() => {
    const init = async () => {
      const studioId = DEFAULT_STUDIO_ID
      const response = await getRoomsByStudioId(studioId)
      const { error } = response as any

      if (error) return

      setRoomList(response)
      setSelectedRoom(response[0])
    }

    init()
  }, [])

  return {
    setSelectedRoom,
    selectedRoom,
    selectedViewType,
    setSelectedViewType,
    isMonthlyCalendar,
    isWeeklyCalendar,
    isYearlyCalendar,
    roomList,
  }
}

export default useAdminCalendarData
