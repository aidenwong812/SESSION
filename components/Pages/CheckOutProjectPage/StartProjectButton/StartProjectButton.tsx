import { useCheckOutProject } from "@/providers/CheckOutProjectProvider"
import { usePayment } from "@/providers/PaymentProvider"
import Button from "@/shared/Button"
import { PAYMENTS } from "@/lib/consts/global"
import { STEPS } from "@/lib/consts/checkout"
import getSessionFee from "@/lib/getSessionFee"

const StartProjectButton = () => {
  const { projectData, setCurStep, loading, setLoading } = useCheckOutProject()
  const { selectedPayment, createStripePaymentIntent } = usePayment()
  const sessionFee = getSessionFee(projectData.projectPrice, 0)
  const totalPrice = projectData.projectPrice + sessionFee

  const handleClick = async () => {
    setLoading(true)
    if (selectedPayment === PAYMENTS.PAYPAL) {
      setCurStep(STEPS.PAYPAL_DETAIL)
      return
    }

    const response = await createStripePaymentIntent(totalPrice)

    setLoading(false)
    if (response) setCurStep(STEPS.STRIPE_DETAIL)
  }

  return (
    <Button
      id="book-project"
      type="button"
      className="h-[48px] w-full border-x-[1px] border-b-[2px] border-x-[#A1EA04] border-b-[#A1EA04] font-urwgeometric_bold text-black
                                      shadow-none md:h-[28.8px]
                                      md:w-[288px] md:text-[9.6px]
                                      md:shadow-[0px_0px_40px_0px_#a1ea0466] lg:h-[38.4px]
                                      lg:w-[384px] lg:text-[12.8px]
                                      xl:h-[48px] xl:w-[480px]
                                      xl:text-[16px]"
      pulseColor="white"
      onClick={handleClick}
      disabled={loading}
    >
      Start Project
    </Button>
  )
}

export default StartProjectButton
