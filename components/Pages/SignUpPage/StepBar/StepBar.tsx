import { useAuth } from "@/providers/AuthProvider"
import ProgressBar from "@/shared/ProgressBar"

const StepBar = ({ currentStep }) => {
  const { totalStep } = useAuth()

  return (
    <>
      <ProgressBar value={(100 / totalStep) * currentStep} />
      <p
        className="pt-[25px] font-urwgeometric text-[16px]
              text-[#A1EA04]"
      >
        Step {currentStep}/{totalStep}
      </p>
    </>
  )
}

export default StepBar
