import Layout from "@/components/Layout"
import { useAdminCalendar } from "@/providers/AdminCalendarProvider"
import CalendarHeader from "./CalendarHeader"
import CalendarWeekDays from "./CalendarWeekDays"
import CalendarMonthlyBody from "./CalendarMonthlyBody"
import CalendarWeeklyBody from "./CalendarWeeklyBody"
import CalendarYearlyBody from "./CalendarYearlyBody"

const CalendarPage = () => {
  const { isMonthlyCalendar, isWeeklyCalendar, isYearlyCalendar } = useAdminCalendar()

  return (
    <Layout type="admin">
      <div className="flex size-full flex-col">
        <CalendarHeader />
        {isMonthlyCalendar && (
          <>
            <CalendarWeekDays />
            <CalendarMonthlyBody />
          </>
        )}
        {isWeeklyCalendar && <CalendarWeeklyBody />}
        {isYearlyCalendar && <CalendarYearlyBody />}
      </div>
    </Layout>
  )
}

export default CalendarPage
