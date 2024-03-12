import Button from "@/shared/Button"
import Media from "@/shared/Media"

const DetailHeader = ({ onClose }) => (
  <div
    className="relative flex h-[128px] w-full items-center
        justify-between pl-[100px]"
  >
    <Media
      type="image"
      link="/images/Admin/session-requests-project-detail-logo.svg"
      blurLink="/images/Admin/session-requests-project-detail-logo.png"
      containerClasses="!absolute w-[136px] h-[136px]
            left-0 top-[5px]"
    />
    <p className="font-urwgeometric_semibold text-[44px] leading-[48px] text-gray_1">
      Project Request
    </p>
    <Button
      id="room-detail-close-btn"
      className="right-[10px] aspect-[1/1]
            w-[44px] border-x-[1px]
            border-b-[2px] border-x-gray_overlay_6
            border-b-gray_overlay_6 bg-gray_overlay_6 !shadow-none
            backdrop-blur-[20px] md:right-[30px]
            lg:right-[40px] xl:right-[50px]"
      bgVariant="primary"
      onClick={onClose}
    >
      <Media
        type="image"
        link="/images/BookSession/close.svg"
        blurLink="/images/BookSession/close.png"
        containerClasses="w-[16px] md:w-[9.6px] lg:w-[12.8pxpx] xl:w-[16px] aspect-[1/1]"
      />
    </Button>
  </div>
)

export default DetailHeader
