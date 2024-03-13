import { useState } from "react"
import { useAdminCalendar } from "@/providers/AdminCalendarProvider"
import Media from "@/shared/Media"
import RequestDetailModal from "../CalendarPage/RequestDetailModal"

const CalendarEvent = ({ event = null, className = "", onClick = () => {} }) => {
  const { setSelectedEvent } = useAdminCalendar()
  const [isOpenDetailModal, setIsOpenDetailModal] = useState(false)
  const isSession = event?.type === "session"

  const handleCloseModal = () => {
    setIsOpenDetailModal(false)
    onClick()
  }

  const handleClick = () => {
    setSelectedEvent(event)
    setIsOpenDetailModal(true)
  }

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        className={`${
          isSession ? "bg-gradient_s_1" : "bg-gradient_p_1"
        } relative z-[2] flex  size-full justify-between rounded-full p-[3px] ${className}`}
      >
        <div className="flex h-full w-fit items-center gap-x-[2px] rounded-full bg-black_0 p-[2px]">
          <Media
            type="image"
            link={event?.pfp || "/images/Admin/user_1.svg"}
            blurLink={event?.pfp || "/images/Admin/user_1.png"}
            containerClasses="h-full aspect-[1/1] rounded-full !overflow-hidden"
          />
          {isSession ? (
            <Media
              type="image"
              link="/images/Admin/calendar-session.svg"
              blurLink="/images/Admin/calendar-session.png"
              containerClasses="h-full aspect-[26/32]"
            />
          ) : (
            <Media
              type="image"
              link="/images/Admin/calendar-project.svg"
              blurLink="/images/Admin/calendar-project.png"
              containerClasses="h-full aspect-[1/1]"
            />
          )}
        </div>
        <div
          className={`flex aspect-[1/1] h-full items-center justify-center rounded-full p-[5px]
              ${isSession ? "bg-gradient_s_1" : "bg-gradient_p_1"}`}
        >
          <Media
            type="image"
            link="/images/Admin/calendar-arrow.svg"
            blurLink="/images/Admin/calendar-arrow.png"
            containerClasses="h-full aspect-[1/1]"
          />
        </div>
      </button>
      <RequestDetailModal isVisible={isOpenDetailModal} toggleModal={handleCloseModal} />
    </>
  )
}

export default CalendarEvent
