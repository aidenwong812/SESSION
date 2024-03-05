import SideModal from "@/components/SideModal"
import { SESSION_REQUEST_STATUS, useSessionRequest } from "@/providers/SessionRequestProvider"
import SessionPayTypeSelect from "./SessionPayTypeSelect"
import ConfirmPricing from "./ConfirmPricing"
import Success from "./Success"
import Free from "./Free"

const ConfirmModal = ({ isVisible, toggleModal }) => {
  const { confirmStatus } = useSessionRequest()

  return (
    <SideModal
      isVisible={isVisible}
      toggleModal={toggleModal}
      containerClasses="!w-auto !min-w-[600px]"
      showCloseButton={
        confirmStatus !== SESSION_REQUEST_STATUS.INPUT_PRICE ||
        confirmStatus !== SESSION_REQUEST_STATUS.FREE
      }
    >
      {confirmStatus === SESSION_REQUEST_STATUS.INITIAL && <SessionPayTypeSelect />}
      {confirmStatus === SESSION_REQUEST_STATUS.INPUT_PRICE && <ConfirmPricing />}
      {confirmStatus === SESSION_REQUEST_STATUS.SUCCESS && <Success onClose={toggleModal} />}
      {confirmStatus === SESSION_REQUEST_STATUS.FREE && <Free />}
    </SideModal>
  )
}

export default ConfirmModal
