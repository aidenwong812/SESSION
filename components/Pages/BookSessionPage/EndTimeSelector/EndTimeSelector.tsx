import { useDateSelect } from "@/providers/DateSelectProvider"
import { availableTimes } from "@/lib/consts/bookSession"

const EndTimeSelector = () => {
  const { selectedStartTime, selectedEndTime, setSelectedEndTime, disabledEndTimes } =
    useDateSelect()
  return (
    <div
      className="flex
      w-full flex-col overflow-hidden rounded-[24px]
      md:rounded-[19.2px] lg:rounded-[25.6px] xl:rounded-[32px]"
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
          End Time
        </p>
      </div>
      <div
        className="bg-[#12121166] p-[10px] md:min-h-[194.2px] md:p-[12px]
        lg:min-h-[227px]  lg:p-[16px] xl:min-h-[285px] xl:p-[20px]"
      >
        {selectedStartTime ? (
          <div
            className="grid w-full grid-cols-2 gap-[10px]
          md:grid-cols-3 md:gap-[12px] lg:gap-[16px] xl:gap-[20px]"
          >
            {availableTimes.slice(selectedStartTime + 3, availableTimes.length).map((time, i) => (
              <button
                className={`flex h-fit items-center
                        justify-center rounded-full
                        bg-gray_overlay_6 p-[5px] transition duration-[200ms]
                        md:py-[4.8px] md:text-[12px] lg:py-[6.4px] lg:text-[16px]
                        xl:py-[8px] xl:text-[20px]
                        ${
                          disabledEndTimes.includes(time)
                            ? "cursor-not-allowed text-gray_2"
                            : "cursor-pointer text-gray_1 hover:bg-[#A1EA04] hover:!text-[#121212]"
                        }
                        ${
                          selectedEndTime === selectedStartTime + i
                            ? "!bg-[#A1EA04] !text-[#121212]"
                            : ""
                        }`}
                type="button"
                key={time}
                onClick={() => setSelectedEndTime(selectedStartTime + i)}
              >
                <p className="font-urwgeometric_bold">
                  {disabledEndTimes.includes(time) ? <s>{time}</s> : time}
                </p>
              </button>
            ))}
          </div>
        ) : (
          <div
            className="col-span-3 flex size-full
                items-center justify-center"
          >
            <p
              className="text-center
                    font-urwgeometric_bold text-gray_1
                    md:text-[9.6px] lg:text-[12.8px] xl:text-[16px]"
            >
              Please select a Start Time first
              <br />
              to see the available End Times.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default EndTimeSelector
