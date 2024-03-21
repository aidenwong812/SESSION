import { useAdminCalendar } from "@/providers/AdminCalendarProvider"
import Media from "@/shared/Media"
import { FULL_MONTH_LABELS } from "@/lib/consts/global"
import RoomSelect from "./RoomSelect"
import ViewSelect from "./ViewSelect"

const CalendarHeader = () => {
  const {
    monthlyCalendarYear,
    monthlyCalendarMonth,
    goNextMonth,
    goPrevMonth,
    isMonthlyCalendar,
    isWeeklyCalendar,
    isYearlyCalendar,
    yearlyCalendarYear,
    goNextWeek,
    goPrevWeek,
    monthLabel,
    yearLabel,
    goNextYear,
    goPrevYear,
  } = useAdminCalendar()

  const handlePrev = () => {
    if (isMonthlyCalendar) goPrevMonth()
    if (isWeeklyCalendar) goPrevWeek()
    if (isYearlyCalendar) goPrevYear()
  }

  const handleNext = () => {
    if (isMonthlyCalendar) goNextMonth()
    if (isWeeklyCalendar) goNextWeek()
    if (isYearlyCalendar) goNextYear()
  }

  return (
    <div className="relative z-[20] flex items-center justify-between bg-gray_overlay_3 px-[40px] py-[20px]">
      <div className="flex items-center gap-x-[10px]">
        <div className="flex size-[48px] items-center justify-center rounded-full bg-black_0">
          <Media
            type="image"
            link="/images/Admin/calendar-top.svg"
            blurLink="/images/Admin/calendar-top.png"
            containerClasses="w-[40px] h-[38px]"
          />
        </div>
        <div
          className="w-fit rounded-full bg-gray_overlay_6 px-[24px]
                py-[8px] font-urwgeometric_semibold text-[14px] leading-[14px] text-gray_2"
        >
          Today
        </div>
      </div>
      <div className="flex items-center gap-x-[20px]">
        <button
          type="button"
          className="flex size-[24px] items-center justify-center
                    rounded-full bg-gray_overlay_6"
          onClick={handlePrev}
        >
          <Media
            type="image"
            link="/images/Admin/calendar-arrow-left.svg"
            blurLink="/images/Admin/calendar-arrow-left.png"
            containerClasses="w-[8px] h-[12px]"
          />
        </button>
        <p
          className="w-[200px] text-center font-urwgeometric_semibold text-[20px]
                leading-[20px] text-gray_1"
        >
          {isMonthlyCalendar &&
            `${FULL_MONTH_LABELS[monthlyCalendarMonth - 1]}, ${monthlyCalendarYear}`}
          {isWeeklyCalendar && `${monthLabel} ${yearLabel}`}
          {isYearlyCalendar && `${yearlyCalendarYear}`}
        </p>
        <button
          type="button"
          className="flex size-[24px] items-center justify-center
                    rounded-full bg-gray_overlay_6"
          onClick={handleNext}
        >
          <Media
            type="image"
            link="/images/Admin/calendar-arrow-right.svg"
            blurLink="/images/Admin/calendar-arrow-right.png"
            containerClasses="w-[8px] h-[12px]"
          />
        </button>
      </div>
      <div className="flex items-center gap-x-[10px]">
        <RoomSelect />
        <ViewSelect />
      </div>
    </div>
  )
}

export default CalendarHeader
