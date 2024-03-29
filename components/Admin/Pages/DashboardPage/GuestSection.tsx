import { useEffect, useState } from "react"
import { useDashboard } from "@/providers/DashboardProvider"
import { useAuth } from "@/providers/AuthProvider"
import getStudioByStudioId from "@/lib/firebase/getStudioByStudioId"
import ConnectCalendarButton from "./ConnectCalendarButton"
import ClipSpan from "../../../ClipSpan"
import TodayGuestList from "./TodayGuestList"

const GuestSection = () => {
  const { upcomingSessions } = useDashboard()
  const { userData } = useAuth()
  const [studioData, setStudioData] = useState(null)
  const [calendarButtonVisible, setCalendarButtonVisible] = useState(true)
  const calendarEmail = studioData?.calendarEmail

  const handleSuccess = () => {
    setCalendarButtonVisible(false)
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStudioByStudioId(userData?.studioId)
      setStudioData(data)
    }

    fetchData()
  }, [userData?.studioId])

  if (!studioData) {
    return <div>Loading...</div>
  }

  return (
    <div className="grid grid-cols-2 gap-x-[40px]">
      <div>
        <p className="font-urwgeometric_bold text-[56px] text-gray_1">Welcome back.</p>
        <p className="font-urwgeometric_semibold text-[18px] text-gray_1">
          You have{" "}
          <ClipSpan className="!font-urwgeometric_bold">
            {upcomingSessions?.length} Studio Guests
          </ClipSpan>{" "}
          coming in today.
        </p>
        {calendarButtonVisible && !calendarEmail && (
          <ConnectCalendarButton studioData={studioData} onSuccess={handleSuccess} />
        )}
      </div>
      <TodayGuestList />
    </div>
  )
}

export default GuestSection
