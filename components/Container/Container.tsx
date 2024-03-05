const Container = ({
  containerClassName = "",
  children,
  className = "",
  contentClassName = "",
}) => (
  <div
    className={`relative w-full
    rounded-[24px] border-x-[1px]
    border-b-[2px] border-x-gray_overlay_6
    border-b-gray_overlay_6
    ${containerClassName}`}
  >
    <div
      className={`absolute
    left-0 top-0 z-[1]
    size-full rounded-[24px] bg-black_0
    bg-gradient-to-b from-[#a1ea0400]
    via-[#a1ea0405]
    via-75% to-[#a1ea041a] shadow-[0px_12px_24px_0px_#0000003d] backdrop-blur-[20px]
    ${className}`}
    />
    <div
      className={`relative z-[2] flex size-full flex-col items-center md:p-[21px]
      lg:p-[28px] xl:p-[35px] ${contentClassName}`}
    >
      {children}
    </div>
  </div>
)

export default Container
