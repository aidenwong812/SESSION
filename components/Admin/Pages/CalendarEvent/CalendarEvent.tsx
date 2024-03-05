import { useState } from "react"
import Media from "@/shared/Media"
import RequestDetailModal from "../CalendarPage/RequestDetailModal"

const CalendarEvent = ({ isSession = true, className = "", onClick = () => {} }) => {
  const [isOpenDetailModal, setIsOpenDetailModal] = useState(false)

  const handleCloseModal = () => {
    setIsOpenDetailModal(false)
    onClick()
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpenDetailModal(true)}
        className={`${
          isSession ? "bg-gradient_s_1" : "bg-gradient_p_1"
        } relative z-[2] flex  size-full justify-between rounded-full p-[3px] ${className}`}
      >
        <div className="flex h-full w-fit items-center gap-x-[2px] rounded-full bg-black_0 p-[2px]">
          <Media
            type="image"
            link="/images/Admin/user_1.svg"
            blurLink="/images/Admin/user_1.png"
            containerClasses="h-full aspect-[1/1]"
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
