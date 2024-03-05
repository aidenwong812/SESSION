import CalendarPage from "@/components/Admin/Pages/CalendarPage"
import AdminCalendarProvider from "@/providers/AdminCalendarProvider"

const Calendar = () => (
  <AdminCalendarProvider>
    <CalendarPage />
  </AdminCalendarProvider>
)

export default Calendar
