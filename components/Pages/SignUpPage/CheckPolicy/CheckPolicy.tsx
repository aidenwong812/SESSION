import { useAuth } from "@/providers/AuthProvider"
import Button from "@/shared/Button/Button"
import ProgressBar from "@/shared/ProgressBar"
import useIsMobile from "@/hooks/useIsMobile"
import BackwardButton from "../../../BackwardButton"
import Policies from "../Policies"

const CheckPolicy = () => {
  const { STEPS, isPolicyApproved, setCurStep } = useAuth()
  const isMobile = useIsMobile()

  return (
    <>
      <div className="pt-[70px] md:pt-0">
        <BackwardButton className="mb-[30px]" onClick={() => setCurStep(STEPS.CREATE_PASSWORD)} />
        <ProgressBar value={(2 / 3) * 100} />
        <p
          className="pb-0
          pt-[20px] font-urwgeometric_medium 
          text-[48px] text-gray_1 md:pb-[60px] md:pt-[30px]"
        >
          Policies
        </p>
      </div>
      <div
        className="flex grow
        flex-col justify-end md:justify-between"
      >
        <Policies />
        <Button
          id="create-account"
          type="submit"
          className="h-[48px] w-full
          border-x-[1px] border-b-[2px]
          border-x-[#A1EA04] border-b-[#A1EA04]
          font-urwgeometric_bold text-black"
          pulseColor="white"
          disabled={!isPolicyApproved}
          onClick={() => setCurStep(STEPS.SUCCESS)}
        >
          {isMobile ? "Continue" : "Create Account"}
        </Button>
      </div>
    </>
  )
}

export default CheckPolicy
