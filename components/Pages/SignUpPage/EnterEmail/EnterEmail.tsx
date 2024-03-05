import useIsMobile from "@/hooks/useIsMobile"
import { useAuth } from "@/providers/AuthProvider"
import { STEPS } from "@/lib/consts/authStep"
import BackwardButton from "../../../BackwardButton"
import FadeIn from "../../../FadeIn"
import WelcomeText from "../../../WelcomeText"
import EmailForm from "../EmailForm"

const EnterEmail = () => {
  const isMobile = useIsMobile()
  const { setCurStep } = useAuth()

  return (
    <FadeIn className="flex h-full flex-col justify-between md:grow">
      {isMobile ? (
        <BackwardButton onClick={() => setCurStep(STEPS.LANDING)} className="mt-[70px]" />
      ) : (
        <WelcomeText />
      )}
      <EmailForm />
    </FadeIn>
  )
}

export default EnterEmail
