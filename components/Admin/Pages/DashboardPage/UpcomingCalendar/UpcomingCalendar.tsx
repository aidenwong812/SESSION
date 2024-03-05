import Media from "@/shared/Media"
import { useUpcomingCalendar } from "@/providers/UpcomingCalendarProvider"
import CalendarYAxisTick from "./CalendarYAxisTick"
import CalendarXAxisTick from "./CalendarXAxisTick"
import CalendarContainer from "./CalendarContainer"

const UpcomingCalendar = () => {
  const { calendarRef } = useUpcomingCalendar()

  return (
    <div
      className="h-[280px] w-full overflow-hidden
                rounded-[24px] bg-gray_overlay_6 backdrop-blur-[10px]"
      ref={calendarRef}
    >
      <div
        className="flex !h-[48px] items-center rounded-l-full
                    rounded-tr-full bg-gray_overlay_6 px-[24px]"
      >
        <div className="flex w-full justify-between">
          <p className="font-urwgeometric_bold text-[16px] text-gray_1">
            Calendar <span className="text-[12px] text-gray_2">- Upcoming 3 Days</span>
          </p>
          <div className="flex items-center gap-x-[4px]">
            <p className="font-urwgeometric_medium text-[16px] text-gray_2">View all</p>
            <Media
              type="image"
              link="/images/Admin/arrow-right.svg"
              blurLink="/images/Admin/arrow-right.png"
              containerClasses="w-[8px] h-[16px]"
            />
          </div>
        </div>
      </div>
      <div className="flex h-[calc(280px-48px)] overflow-y-auto p-[20px] pt-[10px]">
        <CalendarYAxisTick />
        <div className="flex h-full flex-col">
          <CalendarContainer />
          <CalendarXAxisTick />
        </div>
      </div>
    </div>
  )
}

export default UpcomingCalendar
