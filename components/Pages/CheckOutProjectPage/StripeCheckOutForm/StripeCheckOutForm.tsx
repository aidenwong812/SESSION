import { useElements, useStripe, PaymentElement } from "@stripe/react-stripe-js"
import { useState } from "react"
import { usePayment } from "@/providers/PaymentProvider"
import { useCheckOutSession } from "@/providers/CheckOutSessionProvider"
import Button from "@/shared/Button"
import { STEPS } from "@/lib/consts/checkout"
import handleTxError from "@/lib/handleTxError"

const StripeCheckOutForm = () => {
  const stripe = useStripe()
  const elements = useElements()

  const { sessionData, bookSession } = useCheckOutSession()
  const { stripeClientSecret } = usePayment()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsLoading(true)
    if (!stripe || !elements) return

    const paymentIntent = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/checkout-session/${sessionData.id}?status=${STEPS.BOOKED_SUCCESS}`,
      },
      redirect: "if_required",
    })

    if (paymentIntent?.error) {
      handleTxError(paymentIntent.error)
      setIsLoading(false)
      return
    }

    await bookSession()
    setIsLoading(false)
  }

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <Button
        type="submit"
        disabled={!stripe || !elements || !stripeClientSecret || isLoading}
        id="submit"
        className="mt-[20px] h-[48px] w-full border-x-[1px] border-b-[2px] border-x-[#A1EA04] border-b-[#A1EA04] font-urwgeometric_bold
        text-black shadow-none
        md:h-[28.8px] md:w-[288px]
        md:text-[9.6px] md:shadow-[0px_0px_40px_0px_#a1ea0466]
        lg:h-[38.4px] lg:w-[384px]
        lg:text-[12.8px] xl:h-[48px]
        xl:w-[480px] xl:text-[16px]"
      >
        Pay Now
      </Button>
    </form>
  )
}

export default StripeCheckOutForm
