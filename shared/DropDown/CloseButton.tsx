import Media from "../Media"

const CloseButton = ({ onClick }) => (
  <button
    type="button"
    className="flex aspect-[1/1]
      w-[40px] items-center justify-center
      self-end rounded-full border-x-[1px]
      border-b-[2px] border-x-gray_overlay_6 border-b-gray_overlay_6 bg-gray_overlay_6 shadow-[12px_12px_32px_0px_#15151499,-12px_-12px_32px_0px_#40403b33] md:w-[44px]"
    onClick={onClick}
  >
    <Media
      type="image"
      link="/images/Common/close.svg"
      blurLink="/images/Common/close.png"
      containerClasses="w-[24px] md:w-[14.4px] lg:w-[19.2px] xl:w-[24px] aspect-[1/1]"
    />
  </button>
)

export default CloseButton
