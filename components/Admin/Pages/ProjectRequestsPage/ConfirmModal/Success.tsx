import Button from "@/shared/Button"
import Media from "@/shared/Media"
import { PROJECT_REQUEST_STATUS, useProjectRequest } from "@/providers/ProjectRequestProvider"
import ProjectDetail from "../ProjectDetailModal/ProjectDetail"

const Success = ({ onClose }) => {
  const { setConfirmStatus } = useProjectRequest()

  const handleClose = () => {
    setConfirmStatus(PROJECT_REQUEST_STATUS.INITIAL)
    onClose()
  }

  return (
    <div className="flex h-full flex-col">
      <div>
        <Media
          type="image"
          link="/images/Admin/project-requests-confirm-logo.svg"
          blurLink="/images/Admin/project-requests-confirm-logo.png"
          containerClasses="w-[216px] h-[216px] translate-x-[-40px]"
        />
        <div className="translate-y-[-40px]">
          <p className="font-urwgeometric text-[44px] leading-[48px] text-gray_1">
            Session accepted.
          </p>
          <p className="pt-[10px] font-urwgeometric text-[16px] leading-[20px] text-gray_2">
            We have informed the artist via Email.
          </p>
        </div>
        <div className="mt-[50px]">
          <ProjectDetail />
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
