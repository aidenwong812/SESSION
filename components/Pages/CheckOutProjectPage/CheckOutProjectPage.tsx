import { useCheckOutProject } from "@/providers/CheckOutProjectProvider"
import { STEPS } from "@/lib/consts/checkout"
import ProjectCheckOut from "./ProjectCheckOut"
import BookedSuccess from "./BookedSuccess"

const CheckOutProjectPage = () => {
  const { curStep } = useCheckOutProject()

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{curStep === STEPS.BOOKED_SUCCESS ? <BookedSuccess /> : <ProjectCheckOut />}</>
}

export default CheckOutProjectPage
