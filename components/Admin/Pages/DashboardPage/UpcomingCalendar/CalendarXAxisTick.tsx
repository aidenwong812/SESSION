import { useUpcomingCalendar } from "@/providers/UpcomingCalendarProvider"
import { availableTimes } from "@/lib/consts/bookSession"
import getDisplayTime from "@/lib/getDisplayTime"

const CalendarXAxisTick = () => {
  const { intervalWidth } = useUpcomingCalendar()

  return (
    <div className="flex h-[32px] items-end">
      {availableTimes.map((time) => (
        <div
          key={time}
          style={{
            width: `${intervalWidth}px`,
          }}
          className="text-[12px] text-gray_1"
        >
          {getDisplayTime(time)?.time}{" "}
          <span className="text-[10px] text-gray_2">{getDisplayTime(time)?.periodOfDay}</span>
        </div>
      ))}
    </div>
  )
}

export default CalendarXAxisTick
