import { createContext, useContext, useState, useMemo } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { toast } from "react-toastify"
import { PAYMENTS } from "@/lib/consts/global"
import { createPaymentIntent } from "@/lib/stripe/createPaymentIntent"

const PaymentContext = createContext(null)

const PaymentProvider = ({ children }) => {
  const [selectedPayment, setSelectedPayment] = useState(PAYMENTS.STRIPE)
  const [stripeClientSecret, setStripeClientSecret] = useState(null)
  const [stripePaymentId, setStripePaymentId] = useState(null)
  const [loading, setLoading] = useState(false)

  const appearance = {
    theme: "stripe",

    variables: {
      colorPrimary: "#d2d2d2",
      colorBackground: "#1a2629",
      colorText: "#d2d2d2",
      colorDanger: "#df1b41",
      fontFamily: "URWGeometric !important",
      fontSizeBase: "20px",
      borderRadius: "4px",
    },
  }

  const createStripePaymentIntent = async () => {
    const response = await createPaymentIntent(1130)

    if (response.error) {
      toast.error("create payment failed")
      return false
    }
    setStripeClientSecret(response.clientSecret)
    setStripePaymentId(response.paymentId)
    return true
  }

  const stripePromise = useMemo(async () => {
    const promise = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PK)
    return promise
  }, [])

  const stripeOption = {
    clientSecret: stripeClientSecret,
    appearance,
  }

  const onPayPalCreateOrder = (_, actions) =>
    actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "11.30",
          },
        },
      ],
    })

  const onPayPalApproveOrder = (_, actions, callback) =>
    actions.order.capture().then(() => {
      callback()
    })

  const value = useMemo(
    () => ({
      setSelectedPayment,
      selectedPayment,
      onPayPalCreateOrder,
      onPayPalApproveOrder,
      stripePromise,
      setStripeClientSecret,
      stripeClientSecret,
      stripeOption,
      createStripePaymentIntent,
      stripePaymentId,
      loading,
      setLoading,
    }),
    [
      setSelectedPayment,
      selectedPayment,
      onPayPalCreateOrder,
      onPayPalApproveOrder,
      stripePromise,
      setStripeClientSecret,
      stripeClientSecret,
      stripeOption,
      createStripePaymentIntent,
      stripePaymentId,
      loading,
      setLoading,
    ],
  )

  return <PaymentContext.Provider value={value}>{children}</PaymentContext.Provider>
}

export const usePayment = () => {
  const context = useContext(PaymentContext)
  if (!context) {
    throw new Error("usePayment must be used within a PaymentProvider")
  }
  return context
}

export default PaymentProvider
