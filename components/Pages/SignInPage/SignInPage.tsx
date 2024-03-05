/* eslint-disable */
import Layout from "../../Layout"
import useIsMobile from "@/hooks/useIsMobile"
import EnterEmailPassword from "./EnterEmailPassword"
import Landing from "./Landing"
import { useAuth } from "@/providers/AuthProvider"

const SignInPage = () => {
  const isMobile = useIsMobile()
  const { curStep, STEPS } = useAuth()

  return (
    <Layout type={isMobile ? "mobile" : "full"}>
      {curStep === STEPS.LANDING && <Landing />}
      {curStep === STEPS.INPUT_EMAIL_PASSWORD && <EnterEmailPassword />}
    </Layout>
  )
}

export default SignInPage
