import useSelectClickoutside from "@/hooks/useSelectClickoutside"
import useYearlyCalendarDay from "@/hooks/useYearlyCalendarDay"
import getCurrentDate from "@/lib/getCurrentDate"
import getCurrentFullMonth from "@/lib/getCurrentFullMonth"
import getCurrentFullYear from "@/lib/getCurrentFullYear"
import { DEFAULT_STUDIO_ID } from "@/lib/consts/global"
import { useAuth } from "@/providers/AuthProvider"
import SingleCalendarToolTip from "./SingleCalendarTooltip"

const SingleCalendarDay = ({ date }) => {
  const { selectRef, setIsVisibleSelect, isVisibleSelect } = useSelectClickoutside()
  const { userData } = useAuth()
  const selectedStudio = userData?.studioId || DEFAULT_STUDIO_ID
  const { haveOnlySession, haveProject, haveEvents, haveSessionAndProject, events } =
    useYearlyCalendarDay(date, selectedStudio)

  const isToday =
    date.year === getCurrentFullYear() &&
    date.month === getCurrentFullMonth() &&
    date.day === getCurrentDate()

  const handleClick = () => {
    if (!haveEvents) return
    setIsVisibleSelect(true)
  }

  return (
    <div className="flex size-full items-center justify-center">
      <div
        className={`flex items-center justify-center font-urwgeometric_semibold text-[16px]
            ${haveEvents ? "text-black_0" : "text-gray_2"} 
            relative size-[32px]`}
        ref={selectRef}
      >
        <button
          className={`relative z-[2] size-[32px]
        ${isToday && !haveEvents ? "rounded-full border border-gray_1" : ""}`}
          type="button"
          onClick={handleClick}
        >
          <p className="relative z-[2]">{date.day}</p>
          <div className="absolute left-0 top-0 z-[1] size-[32px]">
            <div className="calendar-radial-day size-full">
              {haveProject && <div className="project-full-radial-day" />}
              {haveSessionAndProject && <div className="session-radial-day" />}
              {haveOnlySession && <div className="session-full-radial-day" />}
            </div>
          </div>
        </button>
        {isVisibleSelect && (
          <SingleCalendarToolTip
            date={date}
            events={events}
            onClose={() => setIsVisibleSelect(false)}
          />
        )}
      </div>
    </div>
  )
}

export default SingleCalendarDay
