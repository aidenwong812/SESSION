import { FULL_WEEKDAYS_LABELS } from "@/lib/consts/global"
import getWeekdayInfo from "@/lib/getWeekDayInfo"
import CalendarEvent from "../../CalendarEvent"

const SingleCalendarToolTip = ({ date, events, onClose = () => {} }) => {
  const weekDayIndex = getWeekdayInfo(date.year, date.month, date.day) - 1
  const weekDay = weekDayIndex >= 0 ? weekDayIndex : 6

  return (
    <div
      className="absolute bottom-full right-full z-[100]
        flex w-[230px] flex-col items-center
        gap-y-[12px] rounded-t-[24px] rounded-bl-[24px] rounded-br-[4px] border-x-[1px] border-t-[2px]
        border-x-gray_overlay_6 border-t-gray_overlay_6 bg-black_0 p-[12px]
        shadow-black_shadow"
    >
      <p className="text-center text-gray_2">{FULL_WEEKDAYS_LABELS[weekDay]}</p>
      <div
        className="flex size-[24px] items-center justify-center
            rounded-full bg-gray_overlay_6"
      >
        <p className="font-urwgeometric_semibold text-[14px] text-gray_2">{date.day}</p>
      </div>
      <div className="w-full">
        {events.map((event) => (
          <div className="mt-[6px] h-[32px] w-full" key={event.id}>
            <CalendarEvent event={event} onClick={onClose} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SingleCalendarToolTip
