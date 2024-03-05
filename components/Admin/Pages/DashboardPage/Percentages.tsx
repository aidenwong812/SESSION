import { useDashboard } from "@/providers/DashboardProvider"
import Media from "@//shared/Media"
import ClipSpan from "@/components/ClipSpan"

const Percentages = () => {
  const { totalSessionsCount, totalProjectsCount } = useDashboard()
  const percent = (totalProjectsCount / (totalSessionsCount + totalProjectsCount)) * 100
  return (
    <div
      className="h-[220px] w-full overflow-hidden
          rounded-[24px] bg-gray_overlay_6 backdrop-blur-[10px]"
    >
      <div className="flex !h-[48px] items-center rounded-l-full rounded-tr-full bg-gray_overlay_6 px-[24px]">
        <p className="font-urwgeometric_bold text-[16px] text-gray_1">Booking Percentage</p>
      </div>
      <div className="flex h-[calc(220px-48px)] items-center px-[22px] pt-[10px]">
        <div className="flex w-[160px] justify-center">
          <div className="chart">
            <div className="project-pie" />
            <div className="project-pie-shadow-outer" />
            <div className="project-pie-shadow-inner" />
            <div className="session-pie-shadow-outer" />
            <div className="session-pie-shadow-inner" />
            <div className="session-pie" />
          </div>
        </div>
        <div className="grow">
          <div className="flex grow items-center justify-between">
            <div className="flex items-center">
              <Media
                type="image"
                link="/images/Admin/percent_project.svg"
                blurLink="/images/Admin/percent_project.png"
                containerClasses="w-[44px] h-[44px]"
              />
              <div className="pb-[3px]">
                <p className="font-urwgeometric_bold text-[16px] text-gray_1">Projects</p>
                <p className="font-urwgeometric_medium text-[10px] text-gray_2">
                  {totalProjectsCount} Projects booked
                </p>
              </div>
            </div>
            <ClipSpan className="!bg-gradient_p_1 !font-urwgeometric_medium text-[16px]">
              {Number(percent).toFixed(2)}%
            </ClipSpan>
          </div>
          <div className="flex grow items-center justify-between pl-[2px]">
            <div className="flex items-center">
              <Media
                type="image"
                link="/images/Admin/percent_session.svg"
                blurLink="/images/Admin/percent_session.png"
                containerClasses="w-[38px] h-[46px]"
              />
              <div className="pb-[3px] pl-[3px]">
                <p className="font-urwgeometric_bold text-[16px] text-gray_1">Sessions</p>
                <p className="font-urwgeometric_medium text-[10px] text-gray_2">
                  {totalSessionsCount} Sessions booked
                </p>
              </div>
            </div>
            <ClipSpan className="!font-urwgeometric_medium text-[16px]">
              {Number(percent).toFixed(2)}%
            </ClipSpan>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Percentages
