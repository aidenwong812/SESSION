import BackwardButton from "@/components/BackwardButton"
import Button from "@/shared/Button"
import { PROJECT_REQUEST_STATUS, useProjectRequest } from "@/providers/ProjectRequestProvider"
import PaidDescription from "./PaidDescription"
import UserInfo from "./UserInfo"
import StudioNotes from "./StudioNotes"
import PriceInput from "./PriceInput"
import ProjectDetail from "../ProjectDetailModal/ProjectDetail"

export default function ConfirmPricing({ onClose }) {
  const { selectedRequest, setConfirmStatus, projectPrice, setProjectPrice, handleAccept } =
    useProjectRequest()

  const onClickConfirm = () => {
    handleAccept(selectedRequest)
    setConfirmStatus(PROJECT_REQUEST_STATUS.SUCCESS)
  }

  return (
    <div className="w-full">
      <BackwardButton onClick={onClose} />
      <div className="mt-[40px] grid grid-cols-12 gap-x-[80px]">
        <div className="col-span-6">
          <PaidDescription />
        </div>
        <div className="col-span-6">
          <ProjectDetail />
        </div>
      </div>
      <div className="mt-[40px] grid grid-cols-12 gap-x-[40px]">
        <div className="col-span-5 flex flex-col gap-y-5">
          <PriceInput label="Project Price" value={projectPrice} onChange={setProjectPrice} />
        </div>
        <div className="col-span-7 flex flex-col">
          <UserInfo />
          <StudioNotes />
        </div>
      </div>
      <div className="mt-[30px] flex flex-col items-center">
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
            Confirm Project
          </p>
        </Button>
      </div>
    </div>
  )
}
