import { WEEKDAYS_LABELS } from "@/lib/consts/global"

const SingleCalendarWeekDays = () => (
  <div className="relative z-[2] mt-[12px] grid w-full grid-cols-7 px-[12px]">
    {WEEKDAYS_LABELS.map((weekday) => (
      <p className="text-center font-urwgeometric_semibold text-[14px] text-gray_2" key={weekday}>
        {weekday[0]}
      </p>
    ))}
  </div>
)

export default SingleCalendarWeekDays
