import { useProjectRequest } from "@/providers/ProjectRequestProvider"

export default function ProjectDescription() {
  const { selectedRequest } = useProjectRequest()

  return (
    <div className="mt-[24px]">
      <p className="pb-[8px] pl-[20px] font-urwgeometric text-[14px] leading-[14px] text-gray_1">
        Project Description
      </p>
      <div
        className="w-full !rounded-[24px] !border-x-[1px] !border-b-[2px]
            !border-gray_overlay_6 bg-gray_overlay_6
            !p-[20px]"
      >
        <textarea
          className="!min-h-[280px] w-full
                    !border-none  !bg-transparent
                    font-urwgeometric text-gray_1 focus:!outline-none
                    focus:!ring-0"
          defaultValue={selectedRequest.projectDesc}
        />
      </div>
    </div>
  )
}
