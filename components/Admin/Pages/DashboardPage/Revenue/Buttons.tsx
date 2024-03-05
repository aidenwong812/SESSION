import { REVENUE_PERIOD } from "../../../../../hooks/useTotalRevenueData"
import { useDashboard } from "../../../../../providers/DashboardProvider"
import Button from "../Button"

const Buttons = () => {
  const {
    setSelectedRevenuePeriod,
    isActiveMonthOfRevenue,
    isActiveTodayOfRevenue,
    isActiveWeekOfRevenue,
  } = useDashboard()

  const activeButtonClasses = "px-[16px] py-[4px]"
  const inActiveButtonClasses = "!bg-none !bg-gray_overlay_6"
  const activeTextClasses = "font-urwgeometric_bold text-[12px] text-black_0 pb-[2px]"
  const inActiveTextClasses = "font-urwgeometric_bold text-[12px] text-gray_2 pb-[2px]"

  return (
    <>
      <Button
        className={isActiveTodayOfRevenue ? activeButtonClasses : inActiveButtonClasses}
        onClick={() => setSelectedRevenuePeriod(REVENUE_PERIOD.TODAY)}
      >
        <p className={isActiveTodayOfRevenue ? activeTextClasses : inActiveTextClasses}>Today</p>
      </Button>
      <Button
        className={isActiveWeekOfRevenue ? activeButtonClasses : inActiveButtonClasses}
        onClick={() => setSelectedRevenuePeriod(REVENUE_PERIOD.WEEK)}
      >
        <p className={isActiveWeekOfRevenue ? activeTextClasses : inActiveTextClasses}>This week</p>
      </Button>
      <Button
        className={isActiveMonthOfRevenue ? activeButtonClasses : inActiveButtonClasses}
        onClick={() => setSelectedRevenuePeriod(REVENUE_PERIOD.MONTH)}
      >
        <p className={isActiveMonthOfRevenue ? activeTextClasses : inActiveTextClasses}>
          This month
        </p>
      </Button>
    </>
  )
}

export default Buttons
