import ProjectGuest from "./ProjectGuest"
import SessionGuest from "./SessionGuest"

const TodayGuestList = () => (
  <div
    className="h-[160px] w-full overflow-hidden
        rounded-[24px] bg-gray_overlay_6 backdrop-blur-[10px]"
  >
    <div
      className="flex !h-[48px] items-center rounded-l-full
            rounded-tr-full bg-gray_overlay_6 px-[24px]"
    >
      <p className="font-urwgeometric_bold text-[16px] text-gray_1">{`Today's Studio Guests`}</p>
    </div>
    <div className="h-[calc(160px-48px)] overflow-y-auto pt-[10px]">
      <SessionGuest />
      <ProjectGuest />
    </div>
  </div>
)

export default TodayGuestList
