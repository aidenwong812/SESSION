import CheckOutProjectPage from "@/components/Pages/CheckOutProjectPage"
import CheckOutProjectProvider from "@/providers/CheckOutProjectProvider"
import PaymentProvider from "@/providers/PaymentProvider"

const CheckOutSession = () => (
  <PaymentProvider>
    <CheckOutProjectProvider>
      <CheckOutProjectPage />
    </CheckOutProjectProvider>
  </PaymentProvider>
)

export default CheckOutSession
