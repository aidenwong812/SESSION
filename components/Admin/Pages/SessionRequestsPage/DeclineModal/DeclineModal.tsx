import SideModal from "@/components/SideModal"
import ReasonSubmit from "./ReasonSubmit"

const DeclineModal = ({ isVisible, toggleModal, handleDecline }) => (
  <SideModal isVisible={isVisible} toggleModal={toggleModal}>
    <ReasonSubmit onClose={toggleModal} handleDecline={handleDecline} />
  </SideModal>
)

export default DeclineModal
