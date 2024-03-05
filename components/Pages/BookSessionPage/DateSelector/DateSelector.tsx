import { Calendar, utils } from "@amir04lm26/react-modern-calendar-date-picker"
import { useBookSession } from "@/providers/BookSessionProvider"
import useIsMobile from "@/hooks/useIsMobile"
import useDateLocale from "@/hooks/useDateLocale"
import { useDateSelect } from "@/providers/DateSelectProvider"
import { STEPS } from "@/lib/consts/bookSession"
import BackwardButton from "../../../BackwardButton"
import FadeIn from "../../../FadeIn"

const DateSelector = () => {
  const { setCurStep } = useBookSession()
  const { setSelectedDay, selectedDay, disabledDays } = useDateSelect()
  const isMobile = useIsMobile()
  const { locale } = useDateLocale()

  const onSelectDate = (value) => {
    setSelectedDay(value)
    setCurStep(isMobile ? STEPS.CHOOSE_TIME_START : STEPS.CHOOSE_TIME)
  }

  return (
    <FadeIn className="size-full md:pt-[24px] lg:pt-[32px] xl:pt-[40px]">
      {isMobile && (
        <div className="pb-[10px]">
          <BackwardButton onClick={() => setCurStep(STEPS.CHOOSE_ROOM)} label="Back to Rooms" />
        </div>
      )}
      <Calendar
        value={selectedDay}
        disabledDays={disabledDays}
        onChange={onSelectDate}
        calendarClassName="session-calendar"
        minimumDate={utils("en").getToday()}
        locale={locale}
        calendarTodayClassName="after:!content-[''] after:!h-0"
      />
    </FadeIn>
  )
}

export default DateSelector
