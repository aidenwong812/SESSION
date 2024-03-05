import { availableTimes } from "@/lib/consts/bookSession"
import { useAdminCalendar } from "@/providers/AdminCalendarProvider"

const CalendarXAxisLine = () => {
  const { intervalWidth } = useAdminCalendar()

  return (
    <div className="absolute left-0 top-0 z-[1] flex size-full">
      {availableTimes.map((time) => (
        <div
          key={time}
          style={{
            width: `${intervalWidth}px`,
          }}
          className="border-l border-dashed border-l-gray_2 text-[12px] text-gray_1"
        />
      ))}
    </div>
  )
}

export default CalendarXAxisLine
