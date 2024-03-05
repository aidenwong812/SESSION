import { useEffect, useState } from "react"
import ProgressBar from "@/shared/ProgressBar"
import { useBookProject } from "@/providers/BookProjectProvider"
import useIsMobile from "@/hooks/useIsMobile"
import { STEPS } from "@/lib/consts/bookProject"

const StepBar = () => {
  const { totalStep, curStep } = useBookProject()
  const [currentStep, setCurrentStep] = useState(1)
  const isMobile = useIsMobile()

  useEffect(() => {
    switch (curStep) {
      case STEPS.ADD_DETAIL:
        setCurrentStep(1)
        break
      case STEPS.ADD_TRACKLIST:
        setCurrentStep(2)
        break
      case STEPS.PROJECT_SUMMARY:
        setCurrentStep(3)
        break
      default:
        break
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curStep])
  return (
    <div
      className="relative flex w-[100%] flex-col pb-[20px] 
    pt-[90px] md:w-[70%] md:pb-0 md:pt-[10px]"
    >
      <ProgressBar value={(100 / totalStep) * currentStep} />
      <div
        className="flex w-full justify-around self-center pt-[10px]
            font-urwgeometric_semibold md:text-[12px] lg:text-[16px] xl:text-[20px]"
      >
        {((currentStep === 1 && isMobile) || !isMobile) && (
          <p className={`${curStep === STEPS.ADD_DETAIL ? "text-[#A1EA04]" : "text-gray_2"}`}>
            1. Add Details
          </p>
        )}
        {((currentStep === 2 && isMobile) || !isMobile) && (
          <p className={`${curStep === STEPS.ADD_TRACKLIST ? "text-[#A1EA04]" : "text-gray_2"}`}>
            2. Add Tracklist
          </p>
        )}
        {((currentStep === 3 && isMobile) || !isMobile) && (
          <p className={` ${curStep === STEPS.PROJECT_SUMMARY ? "text-[#A1EA04]" : "text-gray_2"}`}>
            3. Project Summary
          </p>
        )}
      </div>
    </div>
  )
}

export default StepBar
