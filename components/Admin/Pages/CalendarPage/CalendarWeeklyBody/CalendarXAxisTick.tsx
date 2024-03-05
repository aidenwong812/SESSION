import { availableTimes } from "@/lib/consts/bookSession"
import getDisplayTime from "@/lib/getDisplayTime"
import { useAdminCalendar } from "@/providers/AdminCalendarProvider"

const CalendarXAxisTick = () => {
  const { intervalWidth } = useAdminCalendar()

  return (
    <div className="flex h-[40px] items-end font-urwgeometric_semibold">
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
