import EventItem from "./EventItem"

const CalendarSchedule = ({ demo1 = false, demo2 = false, demo3 = false }) => (
  <div className="relative my-[6px] size-full">
    {demo1 && (
      <>
        <EventItem startTimeIndex={0} timePeriod={4} />
        <EventItem startTimeIndex={5} timePeriod={6} />
        <EventItem startTimeIndex={12} timePeriod={3} />
      </>
    )}

    {demo2 && <EventItem startTimeIndex={2} timePeriod={10} isSession={false} />}

    {demo3 && (
      <>
        <EventItem startTimeIndex={1} timePeriod={4} />
        <EventItem startTimeIndex={6} timePeriod={8} isSession={false} />
      </>
    )}
  </div>
)

export default CalendarSchedule
