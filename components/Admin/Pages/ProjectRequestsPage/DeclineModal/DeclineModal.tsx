import SideModal from "@/components/SideModal"
import ReasonSubmit from "./ReasonSubmit"

const DeclineModal = ({ isVisible, toggleModal }) => (
  <SideModal isVisible={isVisible} toggleModal={toggleModal}>
    <ReasonSubmit onClose={toggleModal} />
  </SideModal>
)

export default DeclineModal
