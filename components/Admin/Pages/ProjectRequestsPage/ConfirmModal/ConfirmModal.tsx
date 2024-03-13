import SideModal from "@/components/SideModal"
import { PROJECT_REQUEST_STATUS, useProjectRequest } from "@/providers/ProjectRequestProvider"
import ConfirmPricing from "./ConfirmPricing"
import Success from "./Success"

const ConfirmModal = ({ isVisible, toggleModal }) => {
  const { confirmStatus } = useProjectRequest()

  return (
    <SideModal
      isVisible={isVisible}
      toggleModal={toggleModal}
      containerClasses="!w-auto !min-w-[600px]"
      showCloseButton={confirmStatus !== PROJECT_REQUEST_STATUS.INITIAL}
    >
      {confirmStatus === PROJECT_REQUEST_STATUS.INITIAL && <ConfirmPricing onClose={toggleModal} />}
      {confirmStatus === PROJECT_REQUEST_STATUS.SUCCESS && <Success onClose={toggleModal} />}
    </SideModal>
  )
}

export default ConfirmModal
