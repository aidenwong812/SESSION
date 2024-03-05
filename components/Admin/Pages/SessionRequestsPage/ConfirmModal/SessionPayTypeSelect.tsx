import ClipSpan from "@/components/ClipSpan"
import { SESSION_REQUEST_STATUS, useSessionRequest } from "@/providers/SessionRequestProvider"
import Media from "@/shared/Media"
import ConfirmPricingButton from "./ConfirmPricingButton"

const SessionPayTypeSelect = () => {
  const { setConfirmStatus } = useSessionRequest()

  return (
    <div className="flex h-full flex-col">
      <Media
        type="image"
        link="/images/Admin/session-requests-confirm-logo.svg"
        blurLink="/images/Admin/session-requests-confirm-logo.png"
        containerClasses="w-[400px] h-[302px] -translate-x-20"
      />
      <div className="-translate-y-20">
        <p className="font-urwgeometric text-5xl leading-none text-gray_1">
          Confirm <ClipSpan>Session</ClipSpan>
        </p>
        <p className="pt-2.5 font-urwgeometric text-gray_2">
          Select your preferred payment structure below.
        </p>
      </div>
      <div className="flex grow flex-col justify-end gap-y-2">
        <ConfirmPricingButton
          pricing="Paid"
          description="Set the Price for this Session."
          onClick={() => setConfirmStatus(SESSION_REQUEST_STATUS.INPUT_PRICE)}
        />
        <ConfirmPricingButton
          pricing="Free"
          description="Select for Project Session or to confirm a Session at no cost"
          onClick={() => setConfirmStatus(SESSION_REQUEST_STATUS.FREE)}
        />
      </div>
    </div>
  )
}

export default SessionPayTypeSelect
