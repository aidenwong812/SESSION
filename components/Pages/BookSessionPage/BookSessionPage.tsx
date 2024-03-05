import { useBookSession } from "@/providers/BookSessionProvider"
import { STEPS } from "@/lib/consts/bookSession"
import EquipmentModal from "./EquipmentModal"
import BookedSuccess from "./BookedSuccess"
import BookingSession from "./BookingSession"

const BookSessionPage = () => {
  const { curStep } = useBookSession()
  return (
    <>
      {curStep === STEPS.SUCCESS_BOOKED ? <BookedSuccess /> : <BookingSession />}
      <EquipmentModal />
    </>
  )
}

export default BookSessionPage
