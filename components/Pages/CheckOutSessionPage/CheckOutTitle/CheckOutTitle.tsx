import Media from "@/shared/Media"
import ClipSpan from "../../../ClipSpan"

const CheckOutTitle = () => (
  <div className="flex h-[180px] flex-col pb-[5px] md:h-auto md:pb-[3px] lg:pb-[4px]">
    <div className="flex flex-col items-start gap-x-[5px] md:flex-row md:items-center">
      <Media
        type="image"
        link="/images/CheckOutSession/check.svg"
        blurLink="/images/CheckOutSession/check.png"
        containerClasses="w-[114px] md:w-[68.4px] lg:w-[91.2px] xl:w-[114px] aspect-[114/108]
        translate-y-[-15px] translate-x-[-15px] md:translate-x-0 md:translate-y-0"
      />
      <p
        className="translate-y-[-45px] px-[20px] font-urwgeometric text-[32px] leading-[130%] text-gray_1 
        md:translate-x-[-18px] md:translate-y-[-3px] md:px-0 
        md:text-[28.8px] lg:translate-x-[-24px] lg:translate-y-[-4px] lg:text-[38.4px]
        xl:translate-x-[-30px] xl:translate-y-[-5px] xl:text-[48px]"
      >
        Your <ClipSpan>Session</ClipSpan> has been accepted.
      </p>
    </div>
    <p
      className="translate-y-[-45px] px-[20px] font-urwgeometric text-[16px] 
    text-gray_1 md:translate-y-[-18px] md:pl-[30px] lg:translate-y-[-24px] lg:text-[20px] xl:translate-y-[-30px]"
    >
      <ClipSpan>Sound Studios</ClipSpan> is excited to welcome you. Confirm or cancel the Session
      below.
    </p>
  </div>
)

export default CheckOutTitle
