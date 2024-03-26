import { useUpcomingCalendar } from "@/providers/UpcomingCalendarProvider"
import { FULL_MONTH_LABELS } from "@/lib/consts/global"

const CalendarYAxisTick = () => {
  const { upcomingDays } = useUpcomingCalendar()
  return (
    <div className="flex w-[80px] flex-col justify-around pb-[40px]">
      {upcomingDays.map((date, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <p className="py-[20px] font-urwgeometric_medium text-[12px] text-gray_2" key={i}>
          {FULL_MONTH_LABELS[date.month - 1]}, <span className="text-gray_1">{date.day}</span>
        </p>
      ))}
    </div>
  )
}

export default CalendarYAxisTick
