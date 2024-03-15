import { useSessionStudio } from "@/providers/StudioProvider"
import FadeIn from "@/components/FadeIn"
import SingleStudio from "../SingleStudio"

const StudioList = () => {
  const { roomList } = useSessionStudio()

  return (
    <FadeIn className="md:pt-[40px]">
      <div
        className="grid w-full grid-cols-1 gap-[10px]
        md:grid-cols-2 md:gap-[24px] lg:gap-[32px] xl:gap-[40px]"
      >
        {roomList && roomList.map((room) => <SingleStudio key={room.name} data={room} />)}
      </div>
    </FadeIn>
  )
}

export default StudioList
