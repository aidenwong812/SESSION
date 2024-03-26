import { twMerge } from "tailwind-merge"
import ClipSpan from "@/components/ClipSpan"
import { useDashboard } from "@/providers/DashboardProvider"
import classMapper from "./classMapper.json"

const RevenueAmounts = () => {
  const { displayAmount } = useDashboard()

  return (
    <div className="mt-[12px] flex grow flex-col justify-start gap-y-[8px] pr-[24px]">
      {displayAmount.map((one, index) => (
        <div key={one.roomName} className="flex justify-between">
          <div className="flex items-center gap-x-[4px]">
            <div className={twMerge("size-[6px] rounded-full", classMapper[index])} />
            <p className="pb-[3px] font-urwgeometric_bold text-[12px] text-gray_1">
              {one.roomName}
            </p>
          </div>
          <ClipSpan
            className={twMerge(
              "!py-0 !font-urwgeometric_medium text-[12px] !leading-[100%]",
              classMapper[index],
            )}
          >
            {`$${one.amount}`}
          </ClipSpan>
        </div>
      ))}
    </div>
  )
}

export default RevenueAmounts
