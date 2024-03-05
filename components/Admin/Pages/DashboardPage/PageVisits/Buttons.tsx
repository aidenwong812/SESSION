import { VISIT_PERIOD } from "@/hooks/useVisits"
import { useDashboard } from "@/providers/DashboardProvider"
import Button from "../Button"

const Buttons = () => {
  const {
    setSelectedVisitPeriod,
    isActiveMonthOfVisit,
    isActiveTodayOfVisit,
    isActiveWeekOfVisit,
  } = useDashboard()

  const activeButtonClasses = "px-[16px] py-[4px]"
  const inActiveButtonClasses = "!bg-none !bg-gray_overlay_6"
  const activeTextClasses = "font-urwgeometric_bold text-[12px] text-black_0 pb-[2px]"
  const inActiveTextClasses = "font-urwgeometric_bold text-[12px] text-gray_2 pb-[2px]"

  return (
    <>
      <Button
        className={isActiveTodayOfVisit ? activeButtonClasses : inActiveButtonClasses}
        onClick={() => setSelectedVisitPeriod(VISIT_PERIOD.TODAY)}
      >
        <p className={isActiveTodayOfVisit ? activeTextClasses : inActiveTextClasses}>Today</p>
      </Button>
      <Button
        className={isActiveWeekOfVisit ? activeButtonClasses : inActiveButtonClasses}
        onClick={() => setSelectedVisitPeriod(VISIT_PERIOD.WEEK)}
      >
        <p className={isActiveWeekOfVisit ? activeTextClasses : inActiveTextClasses}>This week</p>
      </Button>
      <Button
        className={isActiveMonthOfVisit ? activeButtonClasses : inActiveButtonClasses}
        onClick={() => setSelectedVisitPeriod(VISIT_PERIOD.MONTH)}
      >
        <p className={isActiveMonthOfVisit ? activeTextClasses : inActiveTextClasses}>This month</p>
      </Button>
    </>
  )
}

export default Buttons
