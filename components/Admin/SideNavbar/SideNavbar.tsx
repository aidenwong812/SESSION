import Media from "@/shared/Media"
import ClipSpan from "../../ClipSpan"
import LogoutButton from "./LogoutButton"
import MenuList from "./MenuList"

const SideNavbar = () => (
  <div
    className="relative flex h-screen w-[240px]
    flex-col !overflow-hidden bg-black_overlay_0 pb-[24px] pt-[15px]"
  >
    <Media
      type="image"
      link="/images/Admin/logo-subtle-bg.png"
      blurLink="/images/Admin/logo-subtle-bg.png"
      containerClasses="w-[240px] h-[635px] !absolute top-0 left-0"
    />
    <div className="relative z-[2] ml-[-15px] flex items-center pl-[18px]">
      <Media
        type="image"
        link="/images/Admin/logo.svg"
        blurLink="/images/Admin/logo.png"
        containerClasses="w-[66px] h-[80px]"
      />
      <div>
        <p className="font-urwgeometric_medium text-[16px] text-gray_1">Studio Area</p>
        <ClipSpan className="!py-0 font-urwgeometric_bold text-[12px] !leading-[100%]">
          Sound Studios
        </ClipSpan>
      </div>
    </div>
    <MenuList />
    <div className="flex grow flex-col justify-end px-[18px]">
      <LogoutButton />
    </div>
  </div>
)

export default SideNavbar
