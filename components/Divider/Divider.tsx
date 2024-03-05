import ClipSpan from "../ClipSpan"

const Divider = ({ className = "" }) => (
  <div
    className={`flex w-full items-center justify-between 
        ${className}`}
  >
    <div
      className="h-[2px] w-full
      bg-gradient_s_1"
    />
    <ClipSpan className="px-[20px] font-urwgeometric_bold text-[#a1ea04]">OR</ClipSpan>
    <div className="h-[2px] w-full bg-gradient_s_1" />
  </div>
)

export default Divider
