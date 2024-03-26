import useSelectClickoutside from "@/hooks/useSelectClickoutside"
import { useUpcomingCalendar } from "@/providers/UpcomingCalendarProvider"
import Media from "@/shared/Media"

const RoomSelect = () => {
  const { selectedRoom, setSelectedRoom, roomList } = useUpcomingCalendar()
  const { selectRef, setIsVisibleSelect, isVisibleSelect } = useSelectClickoutside()

  const handleClick = (room) => {
    setSelectedRoom(room)
    setIsVisibleSelect(false)
  }

  return (
    <div className="relative h-[32px] w-[150px]" ref={selectRef}>
      <button
        type="button"
        onClick={() => setIsVisibleSelect(true)}
        className={`flex size-full items-center justify-between
        rounded-full border bg-gray_overlay_6 pl-[12px] pr-[4px]
        ${isVisibleSelect ? "border-session" : "border-gray_overlay_6"}`}
      >
        <p className="font-urwgeometric_semibold text-[14px] leading-[14px] text-gray_2">
          {selectedRoom?.name || "Loading..."}
        </p>
        <div
          className="flex size-[24px] items-center justify-center rounded-full
                bg-gray_overlay_6"
        >
          <Media
            type="image"
            link="/images/Admin/calendar-dropdown-icon.svg"
            blurLink="/images/Admin/calendar-dropdown-icon.png"
            containerClasses="w-[16px] h-[16px]"
          />
        </div>
      </button>
      {isVisibleSelect && (
        <div
          className="absolute left-0 top-full z-10 mt-[8px] flex w-full
            flex-col gap-y-[20px] rounded-[16px] bg-gray_overlay_6 p-[12px] backdrop-blur-[20px]"
        >
          {roomList.map((room) => (
            <button
              type="button"
              key={room.id}
              onClick={() => handleClick(room)}
              className="text-left font-urwgeometric_semibold text-[14px] leading-[14px]
                        text-gray_2"
            >
              {room.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default RoomSelect
