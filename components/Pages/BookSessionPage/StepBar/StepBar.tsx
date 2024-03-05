import { useEffect, useState } from "react"
import { useBookSession } from "@/providers/BookSessionProvider"
import ProgressBar from "@/shared/ProgressBar"
import useIsMobile from "@/hooks/useIsMobile"
import { STEPS } from "@/lib/consts/bookSession"

const StepBar = () => {
  const { totalStep, curStep } = useBookSession()
  const [currentStep, setCurrentStep] = useState(1)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (curStep === STEPS.CHOOSE_ROOM) setCurrentStep(1)
    if (
      curStep === STEPS.CHOOSE_DATE ||
      curStep === STEPS.CHOOSE_TIME ||
      curStep === STEPS.CHOOSE_TIME_START ||
      curStep === STEPS.CHOOSE_TIME_END
    )
      setCurrentStep(2)
    if (curStep === STEPS.ADD_DETAILS) setCurrentStep(3)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curStep])
  return (
    <div className="flex w-[100%] flex-col self-center pb-[20px] pt-[80px] md:w-[70%] md:pb-0 md:pt-[10px]">
      <ProgressBar value={(100 / totalStep) * currentStep} />
      <div
        className="flex w-full justify-around pt-[10px]
            font-urwgeometric_semibold md:text-[12px] lg:text-[16px] xl:text-[20px]"
      >
        {((currentStep === 1 && isMobile) || !isMobile) && (
          <p className={`${currentStep === 1 ? "text-[#A1EA04]" : "text-gray_2"}`}>
            1. Choose Room
          </p>
        )}
        {((currentStep === 2 && isMobile) || !isMobile) && (
          <p className={`${currentStep === 2 ? "text-[#A1EA04]" : "text-gray_2"}`}>
            2. Choose Date & Time
          </p>
        )}
        {((currentStep === 3 && isMobile) || !isMobile) && (
          <p className={` ${currentStep === 3 ? "text-[#A1EA04]" : "text-gray_2"}`}>
            3. Add Details
          </p>
        )}
      </div>
    </div>
  )
}

export default StepBar
