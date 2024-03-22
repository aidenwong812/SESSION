import { useBookSession } from "@/providers/BookSessionProvider"
import Button from "@/shared/Button"
import { useDateSelect } from "@/providers/DateSelectProvider"
import getMonthName from "@/lib/getMonthName"
import { availableTimes, STEPS } from "@/lib/consts/bookSession"

const TimeSelectStatus = () => {
  const { setCurStep, selectedRoom } = useBookSession()
  const { selectedDay, selectedEndTime, selectedStartTime } = useDateSelect()
  return (
    <div
      className="flex w-full justify-center
              md:pt-[24px] lg:pt-[32px] xl:pt-[40px]"
    >
      <Button
        id="reserve-room"
        type="button"
        className="mt-[20px] aspect-[288/48] w-full border-x-[1px] border-b-[2px] border-x-[#A1EA04]
                    border-b-[#A1EA04] !py-[5px] font-urwgeometric_bold text-black shadow-none
                    md:mt-0 md:aspect-[10/1]
                    md:w-[288px] md:text-[9.6px]
                    md:shadow-[0px_0px_40px_0px_#a1ea0466] lg:w-[384px]
                    lg:text-[12.8px] xl:w-[480px]
                    xl:text-[16px]"
        pulseColor="white"
        onClick={() => setCurStep(STEPS.ADD_DETAILS)}
      >
        Reserve {getMonthName(selectedDay.month)}, {selectedDay.day} {"/ "}
        {availableTimes[selectedStartTime - 1]} -{" "}
        {availableTimes[selectedEndTime + selectedRoom.minimumHours - 1]}
      </Button>
    </div>
  )
}

export default TimeSelectStatus
