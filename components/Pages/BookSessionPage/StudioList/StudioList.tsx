import Loading from "react-loading"
import useIsMobile from "@/hooks/useIsMobile"
import { useSessionStudio } from "@/providers/StudioProvider"
import { useBookSession } from "@/providers/BookSessionProvider"
import FadeIn from "../../../FadeIn"
import SingleStudio from "../SingleStudio"

const StudioList = () => {
  const { roomList } = useSessionStudio()
  const { loading } = useBookSession()
  const isMobile = useIsMobile()
  const size = isMobile ? 50 : 100

  return (
    <FadeIn className="md:pt-[40px]">
      <div
        className="grid w-full grid-cols-1 gap-[10px]
        md:grid-cols-2 md:gap-[24px] lg:gap-[32px] xl:gap-[40px]"
      >
        {roomList && !loading ? (
          roomList.map((room) => <SingleStudio key={room.name} data={room} hasEquipmentButton />)
        ) : (
          <div
            className="col-span-1 flex min-h-[300px] w-full items-center
        justify-center md:col-span-2"
          >
            <Loading width={size} height={size} color="#d2d2d2" type="spin" />
          </div>
        )}
      </div>
    </FadeIn>
  )
}

export default StudioList
