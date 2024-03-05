import ClipSpan from "../../../../ClipSpan"

const RevenueAmounts = () => (
  <div className="flex grow flex-col justify-end gap-y-[8px] pr-[24px]">
    <div className="flex justify-between">
      <div className="flex items-center gap-x-[4px]">
        <div className="size-[6px] rounded-full bg-gradient_s_1" />
        <p className="pb-[3px] font-urwgeometric_bold text-[12px] text-gray_1">Room 1</p>
      </div>
      <ClipSpan className="!py-0 !font-urwgeometric_medium text-[12px] !leading-[100%]">
        $4,980.00
      </ClipSpan>
    </div>
    <div className="flex justify-between">
      <div className="flex items-center gap-x-[4px]">
        <div className="size-[6px] rounded-full bg-gradient_p_1" />
        <p className="pb-[3px] font-urwgeometric_bold text-[12px] text-gray_1">Room 2</p>
      </div>
      <ClipSpan className="!bg-gradient_p_1 !py-0 !font-urwgeometric_medium text-[12px] !leading-[100%]">
        $3,760.00
      </ClipSpan>
    </div>
    <div className="flex justify-between">
      <div className="flex items-center gap-x-[4px]">
        <div className="size-[6px] rounded-full bg-yellow" />
        <p className="pb-[3px] font-urwgeometric_bold text-[12px] text-gray_1">Room 3</p>
      </div>
      <ClipSpan className="!bg-yellow !bg-none !py-0 !font-urwgeometric_medium text-[12px] !leading-[100%]">
        $3,760.00
      </ClipSpan>
    </div>
    <div className="flex justify-between">
      <div className="flex items-center gap-x-[4px]">
        <div className="size-[6px] rounded-full bg-blue" />
        <p className="pb-[3px] font-urwgeometric_bold text-[12px] text-gray_1">Room 4</p>
      </div>
      <ClipSpan className="!bg-blue !bg-none !py-0 !font-urwgeometric_medium text-[12px] !leading-[100%]">
        $3,760.00
      </ClipSpan>
    </div>
  </div>
)

export default RevenueAmounts
