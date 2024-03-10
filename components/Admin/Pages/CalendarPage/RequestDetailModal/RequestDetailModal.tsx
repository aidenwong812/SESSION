import Modal from "@/shared/Modal"
import DetailBody from "./DetailBody"

const RequestDetailModal = ({ event, isVisible, toggleModal }) => (
  <Modal
    isVisible={isVisible}
    onClose={toggleModal}
    modalClassName="bg-[#121211cc] backdrop-blur-[20px] px-[20px]"
    containerClassName="h-full flex flex-col items-center justify-center overflow-hidden py-[20px]"
  >
    <div
      className="no-scrollbar w-full overflow-y-auto overflow-x-hidden rounded-[48px] bg-black_8
        shadow-session_shadow_120 md:w-[768px] lg:w-[1024px] xl:w-[1280px]"
    >
      <DetailBody event={event} onClose={toggleModal} />
    </div>
  </Modal>
)

export default RequestDetailModal
