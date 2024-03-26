import { twMerge } from "tailwind-merge"
import { useDashboard } from "@/providers/DashboardProvider"
import convertChartPercent from "@/lib/convertChartPercent"
import classMapeer from "./classMapper.json"

const RevenueChart = () => {
  const { displayAmount } = useDashboard()
  const chartData = convertChartPercent(displayAmount)

  return (
    <div className="relative mr-[24px] mt-[18px] h-[48px] rounded-[12px]">
      {chartData.map((one, index) => (
        <div
          key={one.roomName}
          className={twMerge(
            "absolute top-0 h-full",
            classMapeer[index],
            index === 0 && "rounded-l-[12px]",
            one === 100 && "rounded-r-[12px]",
          )}
          style={{
            width: `${index === 0 ? one : one - chartData[index - 1]}%`,
            left: `${index === 0 ? 0 : one}%`,
          }}
        />
      ))}
    </div>
  )
}

export default RevenueChart
