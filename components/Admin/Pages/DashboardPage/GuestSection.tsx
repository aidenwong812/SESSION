import { useDashboard } from "@/providers/DashboardProvider"
import ClipSpan from "../../../ClipSpan"
import TodayGuestList from "./TodayGuestList"

const GuestSection = () => {
  const { upcomingSessions } = useDashboard()

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
      </div>
      <TodayGuestList />
    </div>
  )
}

export default GuestSection
