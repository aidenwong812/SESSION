import { useBookProject } from "@/providers/BookProjectProvider"
import useIsMobile from "@/hooks/useIsMobile"
import { STEPS } from "@/lib/consts/bookProject"
import Layout from "../../../Layout"
import Container from "../../../Container"
import ProjectTab from "../ProjectTab"
import SessionTab from "../SessionTab"
import AddDetail from "../AddDetail"
import StepBar from "../StepBar"
import TrackList from "../TrackList"
import ProjectSummary from "../ProjectSummary"
import BackwardButton from "../../../BackwardButton"

const BookingProject = () => {
  const { curStep, setCurStep } = useBookProject()
  const isMobile = useIsMobile()

  const handleBack = () => {
    setCurStep(
      // eslint-disable-next-line no-nested-ternary
      curStep === STEPS.ADD_TRACKLIST ? STEPS.ADD_DETAIL : STEPS.ADD_TRACKLIST,
    )
  }

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
            <ProjectTab />
            <SessionTab />
          </div>
          <div className="relative flex w-full justify-center">
            {!isMobile &&
              (curStep === STEPS.ADD_TRACKLIST || curStep === STEPS.PROJECT_SUMMARY) && (
                <div className="absolute z-[4] flex size-full items-center">
                  <BackwardButton onClick={handleBack} />
                </div>
              )}
            <StepBar />
          </div>
          {curStep === STEPS.ADD_DETAIL && <AddDetail />}
          {curStep === STEPS.ADD_TRACKLIST && <TrackList />}
          {curStep === STEPS.PROJECT_SUMMARY && <ProjectSummary />}
        </Container>
      </div>
    </Layout>
  )
}

export default BookingProject
