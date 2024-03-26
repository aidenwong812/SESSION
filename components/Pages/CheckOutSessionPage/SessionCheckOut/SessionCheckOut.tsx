import useIsMobile from "@/hooks/useIsMobile"
import { useCheckOutSession } from "@/providers/CheckOutSessionProvider"
import { STEPS } from "@/lib/consts/checkout"
import Layout from "@/components/Layout"
import Container from "@/components/Container"
import FadeIn from "@/components/FadeIn"
import LoadingPage from "../../LoadingPage"
import CheckDetail from "../CheckDetail"
import PayPalDetail from "../PayPalDetail"
import StripeDetail from "../StripeDetail"

const SessionCheckOut = () => {
  const isMobile = useIsMobile()
  const { sessionData, curStep } = useCheckOutSession()

  if (!sessionData) return <LoadingPage />

  return (
    <Layout type={isMobile ? "mobile_transparent" : "base"}>
      <div className="size-full pt-[90px] md:px-[33px] md:pt-[0px] lg:px-[44px] xl:px-[55px]">
        <Container
          containerClassName={`${isMobile ? "!border-none h-[calc(100vh-100px)]" : ""}`}
          className="!bg-[#12121166]"
          contentClassName="!p-0 pt-[40px] md:!pt-[9.6px] lg:!pt-[12.8px] xl:!pt-[16px]"
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

export default SessionCheckOut
