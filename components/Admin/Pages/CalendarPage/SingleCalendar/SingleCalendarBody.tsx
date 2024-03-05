import useSingleCalendar from "@/hooks/useSingleCalendar"
import SingleCalendarDay from "./SingleCalendarDay"

const SingleCalendarBody = ({ year, month }) => {
  const { monthDays, prevMonthDays } = useSingleCalendar(year, month)

  return (
    <div className="grid grow grid-cols-7 px-[12px]">
      {prevMonthDays.map((_, i) => (
        // eslint-disable-next-line
        <div key={i} />
      ))}
      {monthDays.map((date, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <SingleCalendarDay date={date} key={i} />
      ))}
    </div>
  )
}

export default SingleCalendarBody
