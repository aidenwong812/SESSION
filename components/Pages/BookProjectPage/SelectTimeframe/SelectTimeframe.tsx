import useIsMobile from "@/hooks/useIsMobile"
import { useBookProject } from "@/providers/BookProjectProvider"
import SelectBox from "../../../SelectBox"

const SelectTimeframe = () => {
  const { timeframe, setTimeframe, timeframeOptions } = useBookProject()
  const isMobile = useIsMobile()

  return (
    <div
      className="rounded-[24px] bg-gray_overlay_3 p-[20px] md:rounded-[14.4px] md:p-[12px]
        lg:rounded-[19.2px] lg:p-[16px] xl:rounded-[24px] xl:p-[20px]"
    >
      <p
        className="font-urwgeometric_bold text-[20px] text-gray_1 md:text-[14.4px]
            lg:text-[19.2px] xl:text-[24px]"
      >
        Choose Timeframe
      </p>
      <p
        className="font-urwgeometric text-[12px] text-gray_2 md:text-[8.4px]
            lg:text-[11.2px] xl:text-[14px]"
      >
        {isMobile ? (
          <>
            Select the ideal timeframe that you would want to have the project finished by. The
            studio will try its best to offer you enough sessions to finish your project.
          </>
        ) : (
          <>
            Select the ideal timeframe that you would want to have the project
            <br />
            finished by. The studio will try its best to offer you enough sessions to finish
            <br />
            your project.
          </>
        )}
      </p>
      <div className="md:pt-[12px] lg:pt-[16px] xl:pt-[20px]">
        <SelectBox
          id="timeframe"
          name="timeframe"
          value={timeframe?.value}
          onChange={setTimeframe}
          placeholder="Choose the Timeframe..."
          options={timeframeOptions}
        />
      </div>
    </div>
  )
}

export default SelectTimeframe
