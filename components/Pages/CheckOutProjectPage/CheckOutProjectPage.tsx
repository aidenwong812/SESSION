import { useCheckOutProject } from "@/providers/CheckOutProjectProvider"
import { STEPS } from "@/lib/consts/checkout"
import ProjectCheckOut from "./ProjectCheckOut"
import BookedSuccess from "./BookedSuccess"
import CancelProject from "./CancelProject"

const CheckOutProjectPage = () => {
  const { curStep } = useCheckOutProject()

  if (curStep === STEPS.BOOKED_SUCCESS) return <BookedSuccess />
  if (curStep === STEPS.CANCEL_REQUEST) return <CancelProject />
  return <ProjectCheckOut />
}

export default CheckOutProjectPage
