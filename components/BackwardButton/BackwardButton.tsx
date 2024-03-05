import Media from "@/shared/Media"

const BackwardButton = ({ className = "", onClick = () => {}, label = "" }) => (
  <div className="flex items-center gap-x-[10px]">
    <button
      className={`flex aspect-[1/1]
      w-[38px] items-center justify-center rounded-full border-x-[1px] border-b-[2px] border-x-gray_overlay_6 border-b-gray_overlay_6
      bg-gray_overlay_6 shadow-[12px_12px_32px_0px_#15151499,-12px_-12px_32px_0px_#40403b33]
      samsungS8:w-[44px] md:w-[26px]
      lg:w-[35px] xl:w-[44px]
      ${className}`}
      type="button"
      onClick={onClick}
    >
      <Media
        type="image"
        link="/images/Common/backward.svg"
        blurLink="/images/Common/backward.png"
        containerClasses="w-[20px] samsungS8:w-[24px] md:w-[18px] lg:w-[24px] aspect-[1/1]"
      />
    </button>
    <p className="font-urwgeometric_semibold text-gray_2">{label}</p>
  </div>
)

export default BackwardButton
