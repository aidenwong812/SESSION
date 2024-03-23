import Media from "@/shared/Media"
import ClipSpan from "@/components/ClipSpan"
import convertTimeFormat from "@/lib/convertTimeFormat"
import getMonthName from "@/lib/getMonthName"
import getWeekDay from "@/lib/getWeekDay"
import { useAdminCalendar } from "@/providers/AdminCalendarProvider"

const StudioDetail = () => {
  const { selectedEvent, selectedRoom } = useAdminCalendar()
  return (
    <div className="relative">
      <Media
        type="image"
        link="/images/Admin/session-requests-detail-studio-logo.svg"
        blurLink="/images/Admin/session-requests-detail-studio-logo.png"
        containerClasses="w-[447px] h-[253px] !absolute right-[-170px] bottom-[-120px] z-[2] !pointer-events-none"
      />
      <div className="relative flex overflow-hidden rounded-[32px] border-x-[1px] border-b-[1px] border-gray_overlay_6">
        <div className="h-full overflow-hidden rounded-t-[32px] border-r-[2px] border-r-session">
          <Media
            type="image"
            link="/images/Admin/session_demo.svg"
            blurLink="/images/Admin/session_demo.png"
            containerClasses="w-[160px] h-[140px]"
          />
        </div>
        <div className="relative flex h-[140px] grow flex-col px-[15px] py-[10px]">
          <Media
            type="image"
            link="/images/Admin/session_demo_bg.svg"
            blurLink="/images/Admin/session_demo_bg.png"
            containerClasses="w-full h-full !absolute top-0 left-0 z-[1]"
          />
          <div className="relative z-[2] flex items-center justify-between border-b-[2px] border-b-gray_overlay_6">
            <p className="font-urwgeometric_bold text-[16px] text-gray_2">
              {getMonthName(selectedEvent?.selectedDay.month)},{" "}
              <ClipSpan className="!py-0">{selectedEvent?.selectedDay.day}</ClipSpan>
            </p>
            <div className="flex flex-col items-end">
              <p className="text-[14px] text-gray_2">{getWeekDay(selectedEvent.selectedDay)},</p>
              <div>
                <ClipSpan className="!py-0 text-[16px]">
                  {convertTimeFormat(selectedEvent?.event.start.dateTime)} –{" "}
                  {convertTimeFormat(selectedEvent?.event.end.dateTime)}
                </ClipSpan>
              </div>
            </div>
          </div>
          <div className="relative z-[2] flex grow flex-col justify-end">
            <ClipSpan className="!py-0 font-urwgeometric text-[14px]">Sound Studios</ClipSpan>
            <p className="mt-[-5px] font-urwgeometric_semibold text-[24px] text-gray_1">
              {selectedRoom.name}
            </p>
            <div className="ml-[-5px] mt-[-5px] flex items-center">
              <Media
                type="image"
                link="/images/Admin/session-capacity.svg"
                blurLink="/images/Admin/session-capacity.png"
                containerClasses="w-[24px] h-[23px]"
              />
              <p className="font-urwgeometric_medium text-[12px] text-gray_1">
                {selectedRoom.capacity}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudioDetail
