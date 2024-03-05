import { PayPalScriptProvider } from "@paypal/react-paypal-js"
import CheckOutSessionPage from "@/components/Pages/CheckOutSessionPage"
import CalendarProvider from "@/providers/CalendarProvider"
import CheckOutSessionProvider from "@/providers/CheckOutSessionProvider"
import PaymentProvider from "@/providers/PaymentProvider"

const CheckOutSession = () => {
  const initialOptions = {
    clientId: process.env.NEXT_PUBLIC_PAYPAL_ID,
    currency: "USD",
    intent: "capture",
  }

  return (
    <PayPalScriptProvider options={initialOptions}>
      <CalendarProvider>
        <PaymentProvider>
          <CheckOutSessionProvider>
            <CheckOutSessionPage />
          </CheckOutSessionProvider>
        </PaymentProvider>
      </CalendarProvider>
    </PayPalScriptProvider>
  )
}

export default CheckOutSession
