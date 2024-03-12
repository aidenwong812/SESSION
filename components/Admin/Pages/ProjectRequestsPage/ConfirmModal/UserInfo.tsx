import { useProjectRequest } from "@/providers/ProjectRequestProvider"
import Media from "@/shared/Media"

const UserInfo = () => {
  const { selectedRequest } = useProjectRequest()

  return (
    <div className="relative z-[2] flex items-center gap-x-[10px]">
      <Media
        type="image"
        containerClasses="w-[40px] h-[40px] rounded-full !overflow-hidden"
        link={selectedRequest?.pfp || "/images/Admin/session-requests-avatar.svg"}
        blurLink={selectedRequest?.pfp || "/blurLink/Admin/session-requests-avatar.png"}
      />
      <div className="flex flex-col gap-x-[5px]">
        <p className="text-left font-urwgeometric text-[14px] leading-[14px] text-gray_2">
          Artist/Band
        </p>
        <p className="font-urwgeometric text-[32px] leading-[32px] text-gray_1">
          {selectedRequest?.bandName}
        </p>
      </div>
    </div>
  )
}

export default UserInfo
