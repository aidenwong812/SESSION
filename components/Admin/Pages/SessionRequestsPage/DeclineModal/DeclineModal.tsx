import SideModal from "@/components/SideModal"
import ReasonSubmit from "./ReasonSubmit"

const DeclineModal = ({ isVisible, toggleModal, requestId }) => (
  <SideModal isVisible={isVisible} toggleModal={toggleModal}>
    <ReasonSubmit onClose={toggleModal} requestId={requestId} />
  </SideModal>
)

export default DeclineModal
