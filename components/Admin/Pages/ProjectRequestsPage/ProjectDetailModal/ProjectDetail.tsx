import Media from "@/shared/Media"
import { useProjectRequest } from "@/providers/ProjectRequestProvider"

export default function ProjectDetail() {
  const { selectedRequest } = useProjectRequest()

  return (
    <div className="relative">
      <Media
        type="image"
        link="/images/Admin/session-requests-project-detail.svg"
        blurLink="/images/Admin/session-requests-project-detail.png"
        containerClasses="w-[362px] h-[269px] !absolute right-[-135px] top-[-60px] z-[2] !pointer-events-none"
      />
      <div className="flex flex-col gap-[4px] overflow-hidden rounded-[32px] border-x-[1px] border-b-[1px] border-gray_overlay_6 bg-[#12121166] p-[20px]">
        <p className="font-urwgeometric text-[16px] leading-[14px] text-gray_2">Project Name</p>
        <div className="font-urwgeometric_semibold text-[44px] leading-[48px] text-project">
          {selectedRequest?.projectName}
        </div>
        <div className="flex items-center gap-2 font-urwgeometric_light">
          <span className="text-gray_1">{selectedRequest?.trackList.length} tracks</span>
          <span className="text-gray_2">•</span>
          <span className="text-gray_2">{selectedRequest?.timeframe?.label}</span>
        </div>
      </div>
    </div>
  )
}
