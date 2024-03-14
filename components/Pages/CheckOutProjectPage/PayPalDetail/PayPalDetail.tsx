import { PayPalButtons } from "@paypal/react-paypal-js"
import { useCheckOutProject } from "@/providers/CheckOutProjectProvider"
import { usePayment } from "@/providers/PaymentProvider"
import { STEPS } from "@/lib/consts/checkout"
import getSessionFee from "@/lib/getSessionFee"
import BackwardButton from "@/components/BackwardButton"

const PayPalDetail = () => {
  const { startProject, projectData, setCurStep, setLoading } = useCheckOutProject()
  const { onPayPalCreateOrder, onPayPalApproveOrder } = usePayment()
  const sessionFee = getSessionFee(projectData.projectPrice, 0)

  const handleBackward = () => {
    setCurStep(STEPS.PAYMENT_CHECKOUT)
    setLoading(false)
  }

  return (
    <div
      className="no-scrollbar grid size-full
      grid-cols-1 gap-x-[30px] overflow-y-scroll 
      rounded-[24px] bg-black_0 p-[24px] md:grid-cols-2"
    >
      <div className="col-span-1 pb-[20px] md:col-span-2">
        <BackwardButton onClick={handleBackward} label="Back to detail" />
      </div>
      <div
        className="aspect-[1/1] rounded-[24px] bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/BookProject/lady-studio-opacity.png')`,
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
          onApprove={(data, actions) => onPayPalApproveOrder(data, actions, startProject)}
        />
      </div>
    </div>
  )
}

export default PayPalDetail
