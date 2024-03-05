import useIsMobile from "@/hooks/useIsMobile"
import { useAuth } from "@/providers/AuthProvider"
import FadeIn from "../../FadeIn"
import Layout from "../../Layout"
import InputEmail from "./InputEmail"
import SentRestEmail from "./SentRestEmail"

const ForgotPassPage = () => {
  const { curStep, STEPS } = useAuth()
  const isMobile = useIsMobile()

  return (
    <Layout type={isMobile ? "mobile" : "full"}>
      <FadeIn
        className="flex h-full
              flex-col pt-[60px]"
      >
        {curStep === STEPS.INPUT_EMAIL && <InputEmail />}
        {curStep === STEPS.SENT_REST_EMAIL && <SentRestEmail />}
      </FadeIn>
    </Layout>
  )
}

export default ForgotPassPage
