import Button from "@/shared/Button"
import Media from "@/shared/Media"
import ComingPeople from "./ComingPeople"
import EngineerNeed from "./EngineerNeeded"
import Instruments from "./Instruments"
import SessionDetail from "./SessionDetail"
import StudioDetail from "./StudioDetail"
import UserInfo from "./UserInfo"

const DetailBody = ({ onClose }) => (
  <div
    className="relative grid w-full grid-cols-2 gap-x-[30px]
        rounded-[48px] bg-black_0 px-[40px] pb-[24px] pt-[60px]"
  >
    <div>
      <StudioDetail />
      <SessionDetail />
    </div>
    <div>
      <UserInfo />
      <Instruments />
      <ComingPeople />
      <EngineerNeed />
    </div>
    <Button
      id="room-detail-close-btn"
      className="!absolute right-[10px] top-[48px]
            z-[10] aspect-[1/1] w-[44px]
            border-x-[1px] border-b-[2px] border-x-gray_overlay_6
            border-b-gray_overlay_6 bg-gray_overlay_6 !shadow-none backdrop-blur-[20px] md:right-[30px]
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

export default DetailBody
