import useIsMobile from "@/hooks/useIsMobile"
import { useBookSession } from "@/providers/BookSessionProvider"
import { useDateSelect } from "@/providers/DateSelectProvider"
import { STEPS } from "@/lib/consts/bookSession"
import Layout from "../../../Layout"
import Container from "../../../Container"
import SessionTab from "../SessionTab"
import ProjectTab from "../ProjectTab"
import StudioList from "../StudioList"
import DateSelector from "../DateSelector"
import TimeSelector from "../TimeSelector"
import StepBar from "../StepBar"
import AddDetails from "../AddDetails"
import BackwardButton from "../../../BackwardButton"

const BookingSession = () => {
  const isMobile = useIsMobile()
  const { curStep, setCurStep } = useBookSession()
  const { calendarRef } = useDateSelect()

  const isTimeSelectStep =
    curStep === STEPS.CHOOSE_TIME ||
    curStep === STEPS.CHOOSE_TIME_START ||
    curStep === STEPS.CHOOSE_TIME_END

  const handleBack = () =>
    setCurStep(
      // eslint-disable-next-line no-nested-ternary
      curStep === STEPS.CHOOSE_DATE
        ? STEPS.CHOOSE_ROOM
        : isMobile
        ? STEPS.CHOOSE_TIME_END
        : STEPS.CHOOSE_TIME,
    )

  return (
    <Layout type={isMobile ? "mobile_dark" : "base"}>
      {isMobile && (
        <div
          className="absolute left-0 top-[140px] 
          h-[40px] w-screen border-t-[2px]
          border-t-[#d2d2d21f] bg-gradient-to-b from-[#121211cc] to-[#12121100]"
        />
      )}
      <div className="size-full pt-[90px] md:px-[33px] lg:px-[44px] xl:px-[55px]">
        <Container
          containerClassName={`${isMobile ? "!border-none h-full" : ""}`}
          className={`${isMobile && "hidden"} bg-[#121211ee]`}
        >
          <div
            className="absolute left-0 
            flex w-full items-center
            justify-center gap-x-[10px]
            md:top-[-24px] lg:top-[-32px] xl:top-[-40px]"
          >
            <SessionTab />
            {curStep !== STEPS.ADD_DETAILS && <ProjectTab />}
          </div>
          <div className="relative flex w-full justify-center">
            {!isMobile && (curStep === STEPS.CHOOSE_DATE || curStep === STEPS.ADD_DETAILS) && (
              <div className="absolute z-[4] flex size-full items-center">
                <BackwardButton onClick={handleBack} />
              </div>
            )}
            <StepBar />
          </div>
          {curStep === STEPS.CHOOSE_ROOM && <StudioList />}
          <div
            className={`${curStep === STEPS.CHOOSE_DATE ? "block" : "hidden"} w-full`}
            ref={calendarRef}
          >
            <DateSelector />
          </div>
          {isTimeSelectStep && <TimeSelector />}
          {curStep === STEPS.ADD_DETAILS && <AddDetails />}
        </Container>
      </div>
    </Layout>
  )
}

export default BookingSession
