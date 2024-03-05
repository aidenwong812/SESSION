import { useBookSession } from "@/providers/BookSessionProvider"
import Media from "@/shared/Media"
import BackwardButton from "../../../BackwardButton"

const ExplainEndTime = () => {
  const { setCurStep, STEPS } = useBookSession()
  return (
    <div className="mt-[20px] flex items-center gap-x-[10px]">
      <BackwardButton onClick={() => setCurStep(STEPS.CHOOSE_TIME_START)} />
      <div className="flex grow items-center justify-start rounded-full bg-gray_overlay_6 py-[10px] xs:justify-center">
        <Media
          type="image"
          link="/images/BookSession/light-info.svg"
          blurLink="/images/BookSessin/light-info.png"
          containerClasses="w-[25px] h-[24px]"
        />
        <p className="text-left font-urwgeometric text-[12px] text-gray_2 samsungS8:text-[14px]">
          Not happy with the available End Times? <br />
          Choose a different <span className="text-gray_1">Start Time</span>.
        </p>
      </div>
    </div>
  )
}

export default ExplainEndTime
