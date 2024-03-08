import Button from "@/shared/Button"
import Media from "@/shared/Media"
import { SESSION_REQUEST_STATUS, useSessionRequest } from "@/providers/SessionRequestProvider"
import StudioDetail from "../RequestDetailModal/StudioDetail"

const Success = ({ onClose }) => {
  const { setConfirmStatus, selectedRequest } = useSessionRequest()

  const handleClose = () => {
    setConfirmStatus(SESSION_REQUEST_STATUS.INITIAL)
    onClose()
  }

  return (
    <div className="flex h-full flex-col">
      <div>
        <Media
          type="image"
          link="/images/Admin/session-requests-confirm-logo.svg"
          blurLink="/images/Admin/session-requests-confirm-logo.png"
          containerClasses="w-[400px] h-[302px] translate-x-[-80px]"
        />
        <div className="translate-y-[-90px]">
          <p className="font-urwgeometric text-[44px] leading-[48px] text-gray_1">
            Session accepted.
          </p>
          <p className="pt-[10px] font-urwgeometric text-[16px] leading-[20px] text-gray_2">
            We have informed the artist via Email.
          </p>
        </div>
        <div className="mt-[-50px]">
          <StudioDetail request={selectedRequest} />
        </div>
      </div>
      <div className="flex grow flex-col justify-end gap-y-[10px]">
        <Button
          id="decline-details"
          type="button"
          className="!h-[48px] !w-full bg-gradient-to-r
                              from-[#a1ea041f] to-[#daeb021f] !p-0
                              !shadow-session_shadow"
          pulseColor="white"
          bgVariant="radial"
          onClick={handleClose}
        >
          <p className="font-urwgeometric_semibold text-[20px] leading-[20px] text-black_0">
            Back to Session Requests
          </p>
        </Button>
      </div>
    </div>
  )
}

export default Success
