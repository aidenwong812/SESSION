import CalendarEvents from "./CalendarEvents"
import CalendarXAxisLine from "./CalendarXAxisLine"

const CalendarContainer = () => (
  <div className="relative grow">
    <CalendarEvents />
    <CalendarXAxisLine />
  </div>
)

export default CalendarContainer
