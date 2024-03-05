import { useCheckOutSession } from "@/providers/CheckOutSessionProvider"
import { STEPS } from "@/lib/consts/checkout"
import SessionCheckOut from "./SessionCheckOut"
import BookedSuccess from "./BookedSuccess"

const CheckOutSessionPage = () => {
  const { curStep } = useCheckOutSession()
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{curStep === STEPS.BOOKED_SUCCESS ? <BookedSuccess /> : <SessionCheckOut />}</>
  )
}

export default CheckOutSessionPage
