import { useBookProject } from "@/providers/BookProjectProvider"
import AlertModal from "../../AlertModal"
import DeleteTrack from "./DeleteTrack"
import BookingProject from "./BookingProject"
import BookedSuccess from "./BookedSuccess"

const BookProjectPage = () => {
  const { STEPS, curStep, isOpenDelTrackModal, setIsOpenDelTrackModal } = useBookProject()
  return (
    <>
      {curStep !== STEPS.SUCCESS ? <BookingProject /> : <BookedSuccess />}
      <AlertModal
        isOpenModal={isOpenDelTrackModal}
        toggleModal={() => setIsOpenDelTrackModal(!isOpenDelTrackModal)}
      >
        {({ toggleModal }) => <DeleteTrack toggleModal={toggleModal} />}
      </AlertModal>
    </>
  )
}

export default BookProjectPage
