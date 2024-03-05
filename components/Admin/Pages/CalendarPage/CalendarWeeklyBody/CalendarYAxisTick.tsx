import { FULL_MONTH_LABELS } from "@/lib/consts/global"
import { useAdminCalendar } from "@/providers/AdminCalendarProvider"

const CalendarYAxisTick = () => {
  const { weekDays } = useAdminCalendar()

  return (
    <div className="flex h-full min-w-[100px] flex-col justify-center gap-y-[40px] pb-[40px]">
      {weekDays.map((date, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className="flex h-[40px] w-full items-center justify-center" key={i}>
          <p className="font-urwgeometric_semibold text-[16px] text-gray_2">
            {FULL_MONTH_LABELS[date.month - 1]}, <span className="text-gray_1">{date.day}</span>
          </p>
        </div>
      ))}
    </div>
  )
}

export default CalendarYAxisTick
