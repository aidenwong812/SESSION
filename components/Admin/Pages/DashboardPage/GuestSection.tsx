import { useAuth } from "@/providers/AuthProvider"
import ClipSpan from "@/components/ClipSpan"
import { DEFAULT_STUDIO_ID } from "@/lib/consts/global"
import useTodayEvents from "@/hooks/useTodayEvents"
import TodayGuestList from "./TodayGuestList"

const GuestSection = () => {
  const { userData } = useAuth()
  const selectedStudio = userData?.studioId || DEFAULT_STUDIO_ID
  const { events } = useTodayEvents(selectedStudio)

  return (
    <div className="grid grid-cols-2 gap-x-[40px]">
      <div>
        <p className="font-urwgeometric_bold text-[56px] text-gray_1">Welcome back.</p>
        <p className="font-urwgeometric_semibold text-[18px] text-gray_1">
          You have{" "}
          <ClipSpan className="!font-urwgeometric_bold">{events.length} Studio Guests</ClipSpan>{" "}
          coming in today.
        </p>
      </div>
      <TodayGuestList />
    </div>
  )
}

export default GuestSection
