import useIsMobile from "@/hooks/useIsMobile"
import { useCheckOutProject } from "@/providers/CheckOutProjectProvider"
import { STEPS } from "@/lib/consts/checkout"
import Layout from "@/components/Layout"
import Container from "@/components/Container"
import FadeIn from "@/components/FadeIn"
import LoadingPage from "../../LoadingPage"
import CheckDetail from "../CheckDetail"
import PayPalDetail from "../PayPalDetail"
import StripeDetail from "../StripeDetail"

const ProjectCheckOut = () => {
  const isMobile = useIsMobile()
  const { projectData, curStep } = useCheckOutProject()

  if (!projectData) return <LoadingPage />

  return (
    <Layout type={isMobile ? "mobile_transparent" : "base"}>
      <div className="size-full pt-[100px] md:pt-[0px]">
        <Container
          containerClassName={`${isMobile ? "!border-none h-[calc(100vh-110px)]" : ""}`}
          className="!bg-[#12121166]"
          contentClassName="!p-0 pt-[40px] md:!pt-[38.4px] lg:!pt-[51.2px]"
        >
          <FadeIn className="size-full">
            {curStep === STEPS.PAYMENT_CHECKOUT && <CheckDetail />}
            {curStep === STEPS.PAYPAL_DETAIL && <PayPalDetail />}
            {curStep === STEPS.STRIPE_DETAIL && <StripeDetail />}
          </FadeIn>
        </Container>
      </div>
    </Layout>
  )
}

export default ProjectCheckOut
