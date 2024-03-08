import { useCheckOutSession } from "@/providers/CheckOutSessionProvider"

const StudioNotes = () => {
  const { sessionData } = useCheckOutSession()
  return (
    <div
      className="flex flex-col rounded-[24px] bg-gray_overlay_3 p-[20px]
        md:gap-y-[12px] md:rounded-[14.4px] md:p-[12px] lg:gap-y-[16px] lg:rounded-[19.2px]
        lg:p-[16px] xl:gap-y-[20px] xl:rounded-[24px] xl:p-[20px]"
    >
      <p className="font-urwgeometric_medium text-[24px] text-gray_1 md:text-[14.4px] lg:text-[19.2px] xl:text-[24px]">
        Studio Notes
      </p>
      <div
        className="flex items-center
            rounded-[24px] border-x-[1px] border-b-[2px]
            border-x-gray_overlay_6 border-b-gray_overlay_6
            bg-gray_overlay_6 p-[20px] md:rounded-[14.4px] md:p-[12px]
            lg:rounded-[19.2px] lg:p-[16px] xl:rounded-[24px] xl:p-[20px]"
      >
        <p className="font-urwgeometric text-[14px] text-gray_1 md:text-[8.4px] lg:text-[11.2px] xl:text-[14px]">
          {sessionData.studioNotes}
        </p>
      </div>
    </div>
  )
}

export default StudioNotes
