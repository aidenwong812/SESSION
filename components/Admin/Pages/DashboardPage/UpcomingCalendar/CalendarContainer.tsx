import CalendarSchedules from "./CalendarSchedules"
import CalendarXAxisLine from "./CalendarXAxisLine"

const CalendarContainer = () => (
  <div className="relative grow">
    <CalendarXAxisLine />
    <CalendarSchedules />
  </div>
)

export default CalendarContainer
