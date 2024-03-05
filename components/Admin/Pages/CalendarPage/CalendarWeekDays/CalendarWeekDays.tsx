import { WEEKDAYS_LABELS } from "@/lib/consts/global"

const CalendarWeekDays = () => (
  <div className="grid w-full grid-cols-7 bg-black_4 py-[20px]">
    {WEEKDAYS_LABELS.map((weekday) => (
      <p className="text-center font-urwgeometric_semibold text-[16px] text-gray_2" key={weekday}>
        {weekday}
      </p>
    ))}
  </div>
)

export default CalendarWeekDays
