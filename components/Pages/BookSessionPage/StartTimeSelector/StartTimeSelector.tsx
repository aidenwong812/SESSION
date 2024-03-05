import { useBookSession } from "@/providers/BookSessionProvider"
import { useDateSelect } from "@/providers/DateSelectProvider"
import { STEPS, availableTimes } from "@/lib/consts/bookSession"

const StartTimeSelector = () => {
  const { curStep, setCurStep } = useBookSession()

  const { selectedStartTime, setSelectedStartTime, enabledTimeIndex, disabledStartTimes } =
    useDateSelect()

  const handleClick = (timeIndex) => {
    setSelectedStartTime(timeIndex + 1)
    if (curStep === STEPS.CHOOSE_TIME_START) setCurStep(STEPS.CHOOSE_TIME_END)
  }

  return (
    <div
      className="w-full 
        overflow-hidden rounded-[24px] md:rounded-[19.2px] lg:rounded-[25.6px]
        xl:rounded-[32px]"
    >
      <div
        className="flex justify-center 
        bg-gray_overlay_6 p-[10px] md:p-[9.6px] lg:p-[12.8px]
        xl:p-[16px]"
      >
        <p
          className="font-urwgeometric_bold 
                text-gray_1
                md:text-[12px] lg:text-[16px] xl:text-[20px]"
        >
          Start Time
        </p>
      </div>
      <div
        className="bg-[#12121166] p-[10px] md:min-h-[194.2px] md:p-[12px]
        lg:min-h-[227px] lg:p-[16px] xl:min-h-[285px] xl:p-[20px]"
      >
        <div
          className="grid grid-cols-3 gap-[10px] samsungS8:grid-cols-2 
        md:grid-cols-3 md:gap-[12px] lg:gap-[16px] xl:gap-[20px]"
        >
          {availableTimes.slice(enabledTimeIndex, 12).map((time, i) => (
            <button
              className={`flex h-fit items-center
                      justify-center rounded-full
                      bg-gray_overlay_6 py-[5px] transition duration-[200ms] md:py-[4.8px]
                      md:text-[12px] lg:py-[6.4px] lg:text-[16px]
                      xl:py-[8px] xl:text-[20px]
                      ${
                        disabledStartTimes.includes(time)
                          ? "cursor-not-allowed text-gray_2"
                          : "cursor-pointer text-gray_1 hover:bg-[#A1EA04] hover:!text-[#121212]"
                      }
                      ${
                        selectedStartTime - enabledTimeIndex === i + 1
                          ? "!bg-[#A1EA04] !text-[#121212]"
                          : ""
                      }`}
              type="button"
              key={time}
              onClick={() => handleClick(enabledTimeIndex + i)}
            >
              <p className="font-urwgeometric_bold">
                {disabledStartTimes.includes(time) ? <s>{time}</s> : time}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StartTimeSelector
