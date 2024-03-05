import useIsMobile from "@/hooks/useIsMobile"
import { useBookSession } from "@/providers/BookSessionProvider"
import { useDateSelect } from "@/providers/DateSelectProvider"
import Media from "@/shared/Media"
import getWeekDay from "@/lib/getWeekDay"
import getMonthName from "@/lib/getMonthName"
import { STEPS } from "@/lib/consts/bookSession"
import BackwardButton from "../../../BackwardButton"
import FadeIn from "../../../FadeIn"
import EndTimeSelector from "../EndTimeSelector"
import ExplainEndTime from "../ExplainEndTime"
import ExplainTimeSelect from "../ExplainTimeSelect"
import SingleStudio from "../SingleStudio"
import StartTimeSelector from "../StartTimeSelector"
import TimeSelectStatus from "../TImeSelectStatus"

const TimeSelector = () => {
  const { setCurStep, curStep, selectedStudio } = useBookSession()

  const { selectedDay, selectedEndTime, selectedStartTime } = useDateSelect()

  const isMobile = useIsMobile()

  const handleClick = () =>
    setCurStep(curStep === STEPS.CHOOSE_TIME_END ? STEPS.CHOOSE_TIME_START : STEPS.CHOOSE_DATE)

  return (
    <FadeIn className="w-full">
      <div
        className="grid grid-cols-12 pb-[20px] md:pb-0 md:pt-[24px]
      lg:pt-[32px] xl:pt-[40px] "
      >
        <div className="col-span-12 md:col-span-4">
          <div className="flex items-center gap-x-[15px]">
            <BackwardButton onClick={handleClick} />
            <p
              className="font-urwgeometric_semibold text-gray_2
                md:text-[9.6px] lg:text-[12.8px] xl:text-[16px]"
            >
              {getWeekDay(selectedDay)}, {getMonthName(selectedDay.month)} {selectedDay.day}th
            </p>
          </div>
        </div>
        {!isMobile && (
          <div className="col-span-8">
            <SingleStudio
              data={selectedStudio}
              hasEquipmentButton
              className="md:!h-[84px] lg:!h-[112px] xl:!h-[140px]"
            />
          </div>
        )}
      </div>
      <div>
        <div
          className="flex flex-[1_auto_1] items-center
            md:gap-x-[15px] md:pt-[24px] lg:gap-x-[20px] 
            lg:pt-[32px] xl:gap-x-[25px] xl:pt-[40px]"
        >
          {((curStep === STEPS.CHOOSE_TIME_START && isMobile) || !isMobile) && (
            <StartTimeSelector />
          )}
          <Media
            type="image"
            link="/images/BookSession/middle-line.svg"
            blurLink="/images/BookSession/middle-line.png"
            containerClasses="md:w-[12px] lg:w-[16px] xl:w-[20px] aspect-[20/8]"
          />
          {((curStep === STEPS.CHOOSE_TIME_END && isMobile) || !isMobile) && <EndTimeSelector />}
        </div>
        {isMobile && curStep === STEPS.CHOOSE_TIME_START && <ExplainTimeSelect />}
        {isMobile && curStep === STEPS.CHOOSE_TIME_END && <ExplainEndTime />}
        {selectedStartTime && selectedEndTime ? <TimeSelectStatus /> : <div />}
      </div>
    </FadeIn>
  )
}

export default TimeSelector
