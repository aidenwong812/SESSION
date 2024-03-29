import { useEffect, useState } from "react"
import { Elements } from "@stripe/react-stripe-js"
import { useDashboard } from "@/providers/DashboardProvider"
import { useAuth } from "@/providers/AuthProvider"
import getStudioByStudioId from "@/lib/firebase/getStudioByStudioId"
import { usePayment } from "@/providers/PaymentProvider"
import ConnectCalendarButton from "./ConnectCalendarButton"
import ClipSpan from "../../../ClipSpan"
import TodayGuestList from "./TodayGuestList"
import StripeConnectForm from "./StripeConnectForm"
import PaypalConnectButton from "./PaypalConnectButton copy"

const GuestSection = () => {
  const { upcomingSessions } = useDashboard()
  const { stripePromise } = usePayment()
  const { userData } = useAuth()
  const [studioData, setStudioData] = useState(null)
  const [calendarButtonVisible, setCalendarButtonVisible] = useState(true)
  const calendarEmail = studioData?.calendarEmail

  const handleSuccess = () => {
    setCalendarButtonVisible(false)
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await getStudioByStudioId(userData?.studioId)
      setStudioData(data)
    }

    fetchData()
  }, [userData?.studioId])

  if (!studioData) {
    return <div>Loading...</div>
  }

  return (
    <div className="grid grid-cols-2 gap-x-[40px]">
      <div>
        <p className="font-urwgeometric_bold text-[56px] text-gray_1">Welcome back.</p>
        <p className="font-urwgeometric_semibold text-[18px] text-gray_1">
          You have{" "}
          <ClipSpan className="!font-urwgeometric_bold">
            {upcomingSessions?.length} Studio Guests
          </ClipSpan>{" "}
          coming in today.
        </p>
        <div className="flex gap-x-[8px]">
          {calendarButtonVisible && !calendarEmail && (
            <ConnectCalendarButton studioData={studioData} onSuccess={handleSuccess} />
          )}
          {!userData?.stripeAccountId && (
            <Elements stripe={stripePromise}>
              <StripeConnectForm />
            </Elements>
          )}
          {!userData?.paypalAccountId && <PaypalConnectButton />}
        </div>
      </div>
      <TodayGuestList />
    </div>
  )
}

export default GuestSection
