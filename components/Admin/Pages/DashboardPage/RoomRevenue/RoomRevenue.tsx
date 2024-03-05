import Button from "../Button"
import RevenueAmounts from "./RevenueAmounts"
import RevenueChart from "./RevenueChart"

const RoomRevenue = () => (
  <div
    className="h-[280px] w-full overflow-hidden
                rounded-[24px] bg-gray_overlay_6 backdrop-blur-[10px]"
  >
    <div
      className="flex !h-[48px] items-center rounded-l-full
                    rounded-tr-full bg-gray_overlay_6 px-[24px]"
    >
      <p className="font-urwgeometric_bold text-[16px] text-gray_1">Revenue by Rooms</p>
    </div>
    <div
      className="flex h-[calc(280px-48px)] flex-col overflow-y-auto overflow-x-hidden
            py-[10px] pl-[22px]"
    >
      <div className="flex min-w-[235px] gap-x-[8px]">
        <Button className="px-[16px] py-[4px]">
          <p className="pb-[2px] font-urwgeometric_bold text-[12px] text-black_0">Total</p>
        </Button>
        <Button className="!bg-gray_overlay_6 !bg-none px-[16px] py-[4px]">
          <p className="pb-[2px] font-urwgeometric_bold text-[12px] text-gray_2">This week</p>
        </Button>
        <Button className="!bg-gray_overlay_6 !bg-none px-[16px] py-[4px]">
          <p className="pb-[2px] font-urwgeometric_bold text-[12px] text-gray_2">This month</p>
        </Button>
      </div>
      <RevenueChart />
      <RevenueAmounts />
    </div>
  </div>
)

export default RoomRevenue
