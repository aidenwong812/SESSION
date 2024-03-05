import { FULL_MONTH_LABELS } from "@/lib/consts/global"
import getCurrentFullYear from "@/lib/getCurrentFullYear"
import getCurrentFullMonth from "@/lib/getCurrentFullMonth"
import SingleCalendarHeader from "./SingleCalendarHeader"
import SingleCalendarWeekDays from "./SingleCalendarWeekDays"
import SingleCalendarBody from "./SingleCalendarBody"

const SingleCalendar = ({ year, month }) => {
  const isThisMonth = year === getCurrentFullYear() && month === getCurrentFullMonth()

  return (
    <div
      className={`relative size-full border border-gray_overlay_3 p-[12px]
        ${isThisMonth ? "bg-gray_overlay_6" : "bg-gray_overlay_3"}
        flex flex-col`}
    >
      {isThisMonth && <div className="absolute left-0 top-0 z-[1] size-full backdrop-blur-[4px]" />}
      <SingleCalendarHeader monthName={FULL_MONTH_LABELS[month - 1]} />
      <SingleCalendarWeekDays />
      <SingleCalendarBody year={year} month={month} />
    </div>
  )
}

export default SingleCalendar
