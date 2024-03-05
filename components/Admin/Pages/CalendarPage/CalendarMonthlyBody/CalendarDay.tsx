import getCurrentDate from "@/lib/getCurrentDate"
import getCurrentFullMonth from "@/lib/getCurrentFullMonth"
import getCurrentFullYear from "@/lib/getCurrentFullYear"
import { useAdminCalendar } from "@/providers/AdminCalendarProvider"
import useCalendarDayEvents from "@/hooks/useCalendarDayEvents"
import CalendarEvent from "../../CalendarEvent"

const CalendarDay = ({ date }) => {
  const { selectedStudio } = useAdminCalendar()
  const isToday =
    date.year === getCurrentFullYear() &&
    date.month === getCurrentFullMonth() &&
    date.day === getCurrentDate()
  const { events } = useCalendarDayEvents(date, selectedStudio?.id)

  return (
    <div
      className={`border border-gray_overlay_6 ${
        isToday ? "bg-gray_overlay_6 backdrop-blur-[20px]" : "bg-gray_overlay_3"
      }
      flex flex-col items-center gap-y-[12px] p-[12px]`}
    >
      <div
        className={`flex size-[24px] items-center
        justify-center rounded-full ${isToday ? "bg-gradient_s_1" : "bg-gray_overlay_6"}`}
      >
        <p
          className={`${
            isToday ? "text-black_1" : "text-gray_2"
          } font-urwgeometric_semibold text-[14px] leading-[14px]`}
        >
          {date.day}
        </p>
      </div>
      <div className="h-[70px] w-full overflow-y-auto pr-[5px]">
        {events.map((event) => (
          <div className="mb-[5px] h-[32px] w-full" key={event.id}>
            <CalendarEvent isSession={event.type === "session"} className="!p-[1px]" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CalendarDay
