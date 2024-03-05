import { useAdminCalendar } from "@/providers/AdminCalendarProvider"
import CalendarYAxisTick from "./CalendarYAxisTick"
import CalendarXAxisTick from "./CalendarXAxisTick"
import CalendarContainer from "./CalendarContainer"

const CalendarWeeklyBody = () => {
  const { weeklyCalendarRef } = useAdminCalendar()

  return (
    <div className="flex grow gap-x-[40px] bg-black_4 p-[40px]">
      <CalendarYAxisTick />
      <div className="flex grow flex-col" ref={weeklyCalendarRef}>
        <CalendarContainer />
        <CalendarXAxisTick />
      </div>
    </div>
  )
}

export default CalendarWeeklyBody
