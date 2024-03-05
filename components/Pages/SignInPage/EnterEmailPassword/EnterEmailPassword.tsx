import useIsMobile from "@/hooks/useIsMobile"
import { useAuth } from "@/providers/AuthProvider"
import { STEPS } from "@/lib/consts/authStep"
import BackwardButton from "../../../BackwardButton"
import FadeIn from "../../../FadeIn"
import WelcomeText from "../../../WelcomeText"
import EmailAndPassword from "../EmailAndPassword"

const EnterEmailPassword = () => {
  const isMobile = useIsMobile()
  const { setCurStep } = useAuth()

  return (
    <FadeIn className="flex h-full flex-col">
      {isMobile ? (
        <BackwardButton onClick={() => setCurStep(STEPS.LANDING)} className="mt-[70px]" />
      ) : (
        <WelcomeText />
      )}
      <div className="flex grow items-end">
        <EmailAndPassword />
      </div>
    </FadeIn>
  )
}

export default EnterEmailPassword
