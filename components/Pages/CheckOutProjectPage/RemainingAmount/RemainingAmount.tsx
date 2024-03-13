import getSessionFee from "@/lib/getSessionFee"
import { useCheckOutProject } from "@/providers/CheckOutProjectProvider"

const RemainingAmount = () => {
  const { projectData } = useCheckOutProject()
  const sessionFee = getSessionFee(projectData.projectPrice, 0)

  return (
    <div
      className="flex flex-col
        rounded-[24px] bg-gradient-to-b
        from-[#a1ea0400] via-[#a1ea0405] via-75% to-[#a1ea041a] p-[20px]
        md:gap-y-[12px] md:rounded-[14.4px] md:p-[12px] lg:gap-y-[16px] lg:rounded-[19.2px]
        lg:p-[16px] xl:gap-y-[20px] xl:rounded-[24px] xl:p-[20px]"
    >
      <p className="font-urwgeometric_medium text-[24px] text-gray_1 md:text-[14.4px] lg:text-[19.2px] xl:text-[24px]">
        Remaining Amount
      </p>
      <p className="font-urwgeometric_bold text-[35px] leading-[100%] text-[#a1ea04] drop-shadow-xl drop-shadow-session md:text-[40px] lg:text-[50px] xl:text-[64px]">
        {`$${projectData.projectPrice + sessionFee}`}
      </p>
    </div>
  )
}

export default RemainingAmount
