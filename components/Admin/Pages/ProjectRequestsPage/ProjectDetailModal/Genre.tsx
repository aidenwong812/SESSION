import { useProjectRequest } from "@/providers/ProjectRequestProvider"

export default function Genre() {
  const { selectedRequest } = useProjectRequest()

  return (
    <div className="mt-[30px]">
      <p className="pb-[8px] pl-[20px] font-urwgeometric text-[14px] leading-[14px] text-gray_1">
        Genre
      </p>
      <div className="flex items-center gap-x-[10px]">
        {selectedRequest.genre?.length > 0 &&
          selectedRequest.genre.map((one) => (
            <div
              key={one.value}
              className="rounded-full bg-gradient_s_1 px-[16px] py-[4px] font-urwgeometric_semibold"
            >
              {one.label}
            </div>
          ))}
      </div>
    </div>
  )
}
