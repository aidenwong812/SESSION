import { PayPalButtons } from "@paypal/react-paypal-js"
import { useCheckOutSession } from "@/providers/CheckOutSessionProvider"
import { usePayment } from "@/providers/PaymentProvider"
import useIsMobile from "@/hooks/useIsMobile"
import convertTimeFormat from "@/lib/convertTimeFormat"
import { STEPS } from "@/lib/consts/checkout"
import BackwardButton from "../../../BackwardButton"

const PayPalDetail = () => {
  const { bookSession, sessionData, setCurStep } = useCheckOutSession()
  const { onPayPalCreateOrder, onPayPalApproveOrder } = usePayment()
  const isMobile = useIsMobile()

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
          backgroundImage: `url('${sessionData.studio.photo}')`,
        }}
      />
      <div className="col-span-1 flex flex-col justify-center">
        <p
          className="font-urwgeometric text-[32px] leading-[130%] text-gray_1 
        md:text-[28.8px] lg:text-[38.4px] xl:text-[48px]"
        >
          {sessionData.studio.name}
        </p>
        <p
          className="py-[10px] font-urwgeometric_medium text-[24px] leading-[100%] text-[#a1ea04] drop-shadow-xl
          drop-shadow-session md:py-[20px] md:text-[19px] lg:text-[25px] xl:text-[32px]"
        >
          $1,130.00
        </p>
        <p
          className="pb-[20px] font-urwgeometric text-[16px] leading-[100%]
          text-gray_1 md:text-[28.8px] lg:text-[38.4px] xl:text-[18px]"
        >
          {new Date(sessionData.event.start.dateTime).toDateString()}{" "}
          {convertTimeFormat(sessionData.event.start.dateTime)}
          {isMobile ? <br /> : <>&nbsp; -</>}{" "}
          {new Date(sessionData.event.end.dateTime).toDateString()}{" "}
          {convertTimeFormat(sessionData.event.end.dateTime)}
        </p>
        <PayPalButtons
          style={{
            layout: "horizontal",
            shape: "pill",
            tagline: false,
            label: "paypal",
            color: "silver",
            height: 47,
            disableMaxWidth: false,
          }}
          createOrder={(data, actions) => onPayPalCreateOrder(data, actions)}
          onApprove={(data, actions) => onPayPalApproveOrder(data, actions, bookSession)}
        />
      </div>
    </div>
  )
}

export default PayPalDetail
