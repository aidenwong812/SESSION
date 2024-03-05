import { useBookProject } from "@/providers/BookProjectProvider"
import TextView from "../../../TextView"

const TimeframeView = () => {
  const { timeframe } = useBookProject()

  return (
    <div
      className="rounded-[24px] bg-gray_overlay_3 p-[20px] md:rounded-[14.4px] md:p-[12px]
      lg:rounded-[19.2px] lg:p-[16px] xl:rounded-[24px] xl:p-[20px]"
    >
      <p
        className="font-urwgeometric_bold text-[20px] text-gray_1 md:text-[14.4px]
        lg:text-[19.2px] xl:text-[24px]"
      >
        Timeframe
      </p>
      <div className="pt-[10px]">
        <TextView text={timeframe.label} />
      </div>
    </div>
  )
}

export default TimeframeView
