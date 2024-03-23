import { useSessionStudio } from "@/providers/StudioProvider"
import FadeIn from "@/components/FadeIn"
import SingleStudio from "../SingleStudio"

const StudioList = () => {
  const { studioList } = useSessionStudio()

  return (
    <FadeIn className="md:pt-[40px]">
      <div
        className="grid w-full grid-cols-1 gap-[10px]
        md:grid-cols-2 md:gap-[24px] lg:gap-[32px] xl:gap-[40px]"
      >
        {studioList && studioList.map((studio) => <SingleStudio key={studio.name} data={studio} />)}
      </div>
    </FadeIn>
  )
}

export default StudioList
