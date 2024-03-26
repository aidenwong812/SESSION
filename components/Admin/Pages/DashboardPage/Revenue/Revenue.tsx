import { useDashboard } from "@/providers/DashboardProvider"
import Media from "@/shared/Media"
import ClipSpan from "@/components/ClipSpan"
import Buttons from "./Buttons"

const Revenue = () => {
  const { displayAmount } = useDashboard()
  const total = displayAmount.reduce((a, b) => a + b.amount, 0)

  return (
    <div
      className="h-[220px] w-full overflow-hidden
                  rounded-[24px] bg-gray_overlay_6 backdrop-blur-[10px]"
    >
      <div className="flex !h-[48px] items-center rounded-l-full rounded-tr-full bg-gray_overlay_6 px-[24px]">
        <p className="font-urwgeometric_bold text-[16px] text-gray_1">Revenue</p>
      </div>
      <div
        className="flex h-[calc(220px-48px)] flex-col overflow-y-auto overflow-x-hidden
              py-[10px] pl-[22px]"
      >
        <div className="flex min-w-[250px] gap-x-[8px]">
          <Buttons />
        </div>
        <div className="flex grow flex-col justify-end">
          <p className="font-urwgeometric_medium text-[48px] text-[#a1ea04] drop-shadow-xl drop-shadow-session">
            <span className="text-[24px]">$</span>
            {total}
          </p>
          <div className="flex items-center">
            <Media
              type="image"
              link="/images/Admin/increase.svg"
              blurLink="/images/Admin/increase.png"
              containerClasses="w-[24px] h-[26px]"
            />
            <ClipSpan className="!font-urwgeometric_bold text-[10px]">20%</ClipSpan>
            <p className="px-[4px] font-urwgeometric_bold text-[10px] text-gray_1">Increase</p>
            <p className="font-urwgeometric_medium text-[10px] text-gray_2">(Last 7 Day Average)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Revenue
