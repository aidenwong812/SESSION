import { useCheckOutSession } from "@/providers/CheckOutSessionProvider"
import { STEPS } from "@/lib/consts/checkout"
import SessionCheckOut from "./SessionCheckOut"
import BookedSuccess from "./BookedSuccess"
import CancelSession from "./CancelSession"

const CheckOutSessionPage = () => {
  const { curStep } = useCheckOutSession()

  if (curStep === STEPS.BOOKED_SUCCESS) return <BookedSuccess />
  if (curStep === STEPS.CANCEL_REQUEST) return <CancelSession />
  return <SessionCheckOut />
}

export default CheckOutSessionPage
