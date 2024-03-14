import { PayPalScriptProvider } from "@paypal/react-paypal-js"
import CheckOutProjectPage from "@/components/Pages/CheckOutProjectPage"
import CheckOutProjectProvider from "@/providers/CheckOutProjectProvider"
import PaymentProvider from "@/providers/PaymentProvider"

const CheckOutSession = () => {
  const initialOptions = {
    clientId: process.env.NEXT_PUBLIC_PAYPAL_ID,
    currency: "USD",
    intent: "capture",
  }

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PaymentProvider>
        <CheckOutProjectProvider>
          <CheckOutProjectPage />
        </CheckOutProjectProvider>
      </PaymentProvider>
    </PayPalScriptProvider>
  )
}

export default CheckOutSession
