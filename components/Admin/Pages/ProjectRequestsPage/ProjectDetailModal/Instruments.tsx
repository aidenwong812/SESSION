import { useProjectRequest } from "@/providers/ProjectRequestProvider"

export default function Instruments() {
  const { selectedRequest } = useProjectRequest()

  return (
    <div className="mt-[24px]">
      <p className="pb-[8px] pl-[20px] font-urwgeometric text-[14px] leading-[14px] text-gray_1">
        Instruments you will be recording
      </p>
      <div className="flex items-center gap-x-[10px]">
        {selectedRequest.instruments?.length > 0 &&
          selectedRequest.instruments.map((instrument) => (
            <div
              key={instrument}
              className="rounded-full bg-gradient_s_1 px-[16px] py-[4px] font-urwgeometric_semibold"
            >
              {instrument}
            </div>
          ))}
      </div>
    </div>
  )
}
