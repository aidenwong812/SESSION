import BackwardButton from "@/components/BackwardButton"
import ClipSpan from "@/components/ClipSpan"
import Button from "@/shared/Button"
import { SESSION_REQUEST_STATUS, useSessionRequest } from "@/providers/SessionRequestProvider"
import sendSessionAccepted from "@/lib/sendSessionAccepted"
import PaidDescription from "./PaidDescription"
import UserInfo from "./UserInfo"
import StudioNotes from "./StudioNotes"
import PriceInput from "./PriceInput"
import StudioDetail from "../RequestDetailModal/StudioDetail"

export default function ConfirmPricing() {
  const {
    selectedRequest: selectedRequestId,
    setConfirmStatus,
    sessionPrice,
    setSessionPrice,
    engineerPrice,
    setEngineerPrice,
    studioNotes,
    handleAccept,
    sessionRequests,
  } = useSessionRequest()
  const selectedRequest = sessionRequests.find((request) => request.id === selectedRequestId)

  const onClickConfirm = () => {
    sendSessionAccepted({ requestId: selectedRequest, studioNotes, type: "paid" })
    handleAccept(selectedRequestId)
    setConfirmStatus(SESSION_REQUEST_STATUS.SUCCESS)
  }

  return (
    <div className="w-full">
      <BackwardButton onClick={() => setConfirmStatus(SESSION_REQUEST_STATUS.INITIAL)} />
      <div className="mt-[20px] grid grid-cols-12 gap-x-[80px]">
        <div className="col-span-6">
          <PaidDescription />
        </div>
        <div className="col-span-6">
          <StudioDetail request={selectedRequest} />
        </div>
      </div>
      <div className="mt-[40px] grid grid-cols-12 gap-x-[40px]">
        <div className="col-span-5 flex flex-col gap-y-5">
          <PriceInput label="Session Price" value={sessionPrice} onChange={setSessionPrice} />
          <PriceInput label="Engineer Price" value={engineerPrice} onChange={setEngineerPrice} />
        </div>
        <div className="col-span-7 flex flex-col">
          <UserInfo />
          <StudioNotes />
        </div>
      </div>
      <div className="mt-[30px] flex flex-col items-center">
        <ClipSpan className="!font-urwgeometric_semibold !text-[24px] !leading-[24px]">
          Total ${sessionPrice + engineerPrice}
        </ClipSpan>
        <Button
          id="confirm-session"
          type="button"
          className="!mt-[10px] !h-[48px] !w-[520px] bg-gradient-to-r
                          from-[#a1ea041f] to-[#daeb021f] !p-0
                          !shadow-session_shadow"
          pulseColor="white"
          bgVariant="radial"
          onClick={onClickConfirm}
        >
          <p className="font-urwgeometric_semibold text-[20px] leading-[20px] text-black_0">
            Confirm Session
          </p>
        </Button>
      </div>
    </div>
  )
}
