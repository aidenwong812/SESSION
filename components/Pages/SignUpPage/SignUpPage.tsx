import useIsMobile from "@/hooks/useIsMobile"
import { useAuth } from "@/providers/AuthProvider"
import Layout from "../../Layout"
import CheckPolicy from "./CheckPolicy"
import CreatePassword from "./CreatePassword"
import EnterEmail from "./EnterEmail"
import Landing from "./Landing"
import Success from "./Success"

const SignUpPage = () => {
  const { curStep, STEPS } = useAuth()
  const isMobile = useIsMobile()

  return (
    <Layout type={isMobile ? "mobile" : "full"}>
      {curStep === STEPS.LANDING && <Landing />}
      {curStep === STEPS.INPUT_EMAIL && <EnterEmail />}
      {curStep === STEPS.CREATE_PASSWORD && <CreatePassword />}
      {curStep === STEPS.CHECK_POLICIES && <CheckPolicy />}
      {curStep === STEPS.SUCCESS && <Success />}
    </Layout>
  )
}

export default SignUpPage
