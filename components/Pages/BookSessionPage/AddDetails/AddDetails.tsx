import { useBookSession } from "@/providers/BookSessionProvider"
import Form from "@/shared/Form"
import useIsMobile from "@/hooks/useIsMobile"
import { useDateSelect } from "@/providers/DateSelectProvider"
import { validation, availableTimes, STEPS } from "@/lib/consts/bookSession"
import BookSessionButton from "../BookSessionButton"
import BookedStudio from "../BookedStudio"
import ComingPeople from "../ComingPeople"
import EquipmentDetail from "../../../EquipmentDetail"
import InputDetail from "../InputDetail"
import EngineerNeedQuestion from "../EngineerNeedQuestion"
import StudioLocation from "../../../StudioLocation"
import FadeIn from "../../../FadeIn"
import BackwardButton from "../../../BackwardButton"
import InputBandInstrument from "../InputBandInstrument"

const AddDetails = () => {
  const { activeProject, selectedRoom, setCurStep, request } = useBookSession()
  const { selectedDay, selectedStartTime, selectedEndTime } = useDateSelect()
  const isMobile = useIsMobile()

  return (
    <FadeIn className="w-full pt-[40px] lg:pt-[50px] xl:pt-[70px]">
      <Form
        onSubmit={() =>
          request({
            startTime: availableTimes[selectedStartTime - 1],
            endTime: availableTimes[selectedEndTime + selectedRoom.minimumHours - 1],
            selectedDay,
            roomName: selectedRoom.name,
            projectId: activeProject?.id,
          })
        }
        validationSchema={validation}
        className="grid w-full grid-cols-1 md:mt-[-18px]
        md:grid-cols-2 md:gap-x-[24px] lg:mt-[-24px]
        lg:gap-x-[32px] xl:mt-[-30px] xl:gap-x-[40px]"
      >
        {isMobile && (
          <div className="col-span-1 pb-[20px]">
            <BackwardButton
              onClick={() => setCurStep(isMobile ? STEPS.CHOOSE_TIME_END : STEPS.CHOOSE_TIME)}
              label="Back to Date & Time"
            />
          </div>
        )}
        <div className="flex flex-col">
          <div className="mb-[20px] md:mb-[24px] lg:mb-[32px] xl:mb-[40px]">
            <BookedStudio />
          </div>
          <InputBandInstrument />
          <InputDetail />
          {!isMobile && <BookSessionButton />}
        </div>
        <div>
          <EngineerNeedQuestion />
          <ComingPeople />
          {isMobile && <BookSessionButton />}
        </div>
        <div
          className="col-span-1 flex flex-col md:col-span-2
          md:gap-y-[24px] lg:gap-y-[32px] xl:gap-y-[40px]"
        >
          <StudioLocation />
          <EquipmentDetail data={selectedRoom} />
        </div>
      </Form>
    </FadeIn>
  )
}

export default AddDetails
