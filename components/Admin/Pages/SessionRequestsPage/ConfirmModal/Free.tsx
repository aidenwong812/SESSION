import BackwardButton from "@/components/BackwardButton"
import Button from "@/shared/Button"
import { SESSION_REQUEST_STATUS, useSessionRequest } from "@/providers/SessionRequestProvider"
import FreeDescription from "./FreeDescription"
import StudioNotes from "./StudioNotes"

const Free = () => {
  const { setConfirmStatus } = useSessionRequest()

  return (
    <div className="w-full">
      <BackwardButton onClick={() => setConfirmStatus(SESSION_REQUEST_STATUS.INITIAL)} />
      <FreeDescription />
      <StudioNotes className="w-[520px]" />
      <div className="mt-[30px] flex flex-col items-center">
        <Button
          id="confirm-session"
          type="button"
          className="!mt-[10px] !h-[48px] !w-full bg-gradient-to-r
                          from-[#a1ea041f] to-[#daeb021f] !p-0
                          !shadow-session_shadow"
          pulseColor="white"
          bgVariant="radial"
          onClick={() => setConfirmStatus(SESSION_REQUEST_STATUS.SUCCESS)}
        >
          <p className="font-urwgeometric_semibold text-[20px] leading-[20px] text-black_0">
            Confirm Session
          </p>
        </Button>
      </div>
    </div>
  )
}

export default Free
