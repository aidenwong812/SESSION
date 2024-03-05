import { useCheckOutSession } from "@/providers/CheckOutSessionProvider"
import { usePayment } from "@/providers/PaymentProvider"
import Button from "@/shared/Button"
import { PAYMENTS } from "@/lib/consts/global"
import { STEPS } from "@/lib/consts/checkout"

const BookSessionButton = () => {
  const { setCurStep, loading, setLoading } = useCheckOutSession()
  const { selectedPayment, createStripePaymentIntent } = usePayment()

  const handleClick = async () => {
    setLoading(true)
    if (selectedPayment === PAYMENTS.PAYPAL) {
      setCurStep(STEPS.PAYPAL_DETAIL)
      return
    }

    const response = await createStripePaymentIntent()

    setLoading(false)
    if (response) setCurStep(STEPS.STRIPE_DETAIL)
  }

  return (
    <Button
      id="book-session"
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
      Book Session
    </Button>
  )
}

export default BookSessionButton
