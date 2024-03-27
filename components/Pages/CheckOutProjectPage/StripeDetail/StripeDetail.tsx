import { Elements } from "@stripe/react-stripe-js"
import { useCheckOutProject } from "@/providers/CheckOutProjectProvider"
import { usePayment } from "@/providers/PaymentProvider"
import { useLayout } from "@/providers/LayoutProvider"
import { STEPS } from "@/lib/consts/checkout"
import getSessionFee from "@/lib/getSessionFee"
import BackwardButton from "@/components/BackwardButton"
import StripeCheckOutForm from "../StripeCheckOutForm"

const StripeDetail = () => {
  const { projectData, setCurStep } = useCheckOutProject()
  const { studio } = useLayout()
  const { stripePromise, stripeOption, stripePaymentId, stripeClientSecret } = usePayment()
  const sessionFee = getSessionFee(projectData.projectPrice, 0)

  return (
    <div
      className="no-scrollbar grid size-full
      grid-cols-1 gap-x-[30px] overflow-y-scroll 
      rounded-[24px] bg-black_0 p-[24px] md:grid-cols-2"
    >
      <div className="col-span-1 pb-[20px] md:col-span-2">
        <BackwardButton onClick={() => setCurStep(STEPS.PAYMENT_CHECKOUT)} label="Back to detail" />
      </div>
      <div
        className="aspect-[1/1] rounded-[24px] bg-cover bg-center"
        style={{
          backgroundImage: `url('${
            studio?.photo || "/images/BookProject/lady-studio-opacity.png"
          }')`,
        }}
      />
      <div className="col-span-1 flex flex-col justify-center">
        <p
          className="font-urwgeometric text-[32px] leading-[130%] text-gray_1 
        md:text-[28.8px] lg:text-[38.4px] xl:text-[48px]"
        >
          {projectData.projectName}
        </p>
        <p
          className="py-[10px] font-urwgeometric_medium text-[24px] leading-[100%] text-[#a1ea04] drop-shadow-xl
          drop-shadow-session md:py-[20px] md:text-[19px] lg:text-[25px] xl:text-[32px]"
        >
          {`$${projectData.projectPrice + sessionFee}`}
        </p>
        <p
          className="pb-[20px] font-urwgeometric text-[16px] leading-[100%]
          text-gray_1 md:text-[28.8px] lg:text-[38.4px] xl:text-[18px]"
        >
          {projectData.timeframe.label}
        </p>
        {stripeClientSecret && stripePaymentId && (
          <Elements options={stripeOption} stripe={stripePromise}>
            <StripeCheckOutForm />
          </Elements>
        )}
      </div>
    </div>
  )
}

export default StripeDetail
