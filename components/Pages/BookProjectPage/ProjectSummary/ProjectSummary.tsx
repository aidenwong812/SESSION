import useIsMobile from "@/hooks/useIsMobile"
import { useBookProject } from "@/providers/BookProjectProvider"
import Accordion from "@/shared/Accordion"
import Media from "@/shared/Media"
import { STEPS } from "@/lib/consts/bookProject"
import ExplainRulesSafety from "../../../ExplainRulesSafety"
import FadeIn from "../../../FadeIn"
import TextView from "../../../TextView"
import LinksView from "../LinksView"
import RequestProjectButton from "../RequestProjectButton"
import SingleStudio from "../../../SingleStudio"
import TimeframeView from "../TimeframeView"
import TracklistView from "../TracklistView"
import BackwardButton from "../../../BackwardButton"

const ProjectSummary = () => {
  const { bandName, projectName, genre, projectDesc, instruments, setCurStep } = useBookProject()
  const isMobile = useIsMobile()

  return (
    <FadeIn
      className="grid w-full grid-cols-1 md:grid-cols-2
      md:gap-x-[24px] md:pt-[24px] lg:gap-x-[32px]
      lg:pt-[32px] xl:gap-x-[40px] xl:pt-[40px]"
    >
      {isMobile && (
        <div className="col-span-1 pb-[20px]">
          <BackwardButton
            onClick={() => setCurStep(STEPS.ADD_TRACKLIST)}
            label="Back to Tracklist"
          />
        </div>
      )}
      <div className="col-span-2 flex flex-col gap-y-[20px] md:col-span-1">
        {isMobile && <SingleStudio />}
        <div className="flex items-center">
          <Media
            type="image"
            link="/images/BookProject/sparkle.svg"
            blurLink="/images/BookProject/sparkle.png"
            containerClasses="w-[40px] md:w-[35.4px] lg:w-[47.2px] xl:w-[59px] aspect-[1/1]"
          />
          <p className="font-urwgeometric_bold text-[24px] text-gray_1 md:text-[19.2px] lg:text-[25.6px] xl:text-[32px]">
            Project Summary
          </p>
        </div>
        <TextView label="Artist/Band Name" text={bandName} />
        {isMobile && (
          <Accordion
            title="Links"
            tabClassName="text-gray_1 font-urwgeometric_bold
            md:text-[14.4px] lg:text-[19.2px] xl:text-[24px]"
            content={<LinksView />}
            className="!bg-gray_overlay_3"
            contentClassname="pt-[15px]
            md:text-[9.6px] lg:text-[12.8px] xl:text-[16px]"
          />
        )}
        <TextView label="Project Name" text={projectName} />
        <TextView label="Genre" text={genre.map((item) => item.label).join(", ")} />
        <TextView
          label="Project Description"
          text={projectDesc}
          className="!min-h-[104px] !items-start !rounded-[24px] py-[15px] md:py-[12.8px] lg:py-[19.2px] xl:!py-[24px]"
        />
        <TextView
          label="Instruments you will be recording"
          text={instruments.map((item) => item.label).join(", ")}
        />
        {!isMobile && <TimeframeView />}
      </div>
      <div className="col-span-2 flex flex-col gap-y-[20px] pt-[20px] md:col-span-1 md:pt-0">
        {!isMobile && <SingleStudio />}
        <Accordion
          title="Tracklist"
          tabClassName="text-gray_1 font-urwgeometric_bold
          md:text-[14.4px] lg:text-[19.2px] xl:text-[24px]"
          content={<TracklistView />}
          className="!bg-gray_overlay_3"
          contentClassname="pt-[15px]
          md:text-[9.6px] lg:text-[12.8px] xl:text-[16px]"
        />
        {isMobile && <TimeframeView />}
        {!isMobile && (
          <Accordion
            title="Links"
            tabClassName="text-gray_1 font-urwgeometric_bold
            md:text-[14.4px] lg:text-[19.2px] xl:text-[24px]"
            content={<LinksView />}
            className="!bg-gray_overlay_3"
            contentClassname="pt-[15px]
            md:text-[9.6px] lg:text-[12.8px] xl:text-[16px]"
          />
        )}
      </div>
      <div className="col-span-2 flex flex-col items-center gap-y-[20px] pt-[40px]">
        <RequestProjectButton />
        <ExplainRulesSafety />
      </div>
    </FadeIn>
  )
}

export default ProjectSummary
