import { useState } from "react"
import Media from "@/shared/Media"
import SideModal from "../../SideModal"
import LogoutAlert from "./LogoutAlert"

const LogoutButton = () => {
  const [isOpenLogoutModal, setIsOpenLogoutModal] = useState(false)

  return (
    <>
      <button
        type="button"
        className="flex items-center gap-x-[8px]
        border-t border-t-gray_overlay_6 pt-[14px]"
        onClick={() => setIsOpenLogoutModal(true)}
      >
        <div
          className="flex size-[24px] items-center justify-center
          rounded-full bg-gray_overlay_3"
        >
          <Media
            type="image"
            link="/images/Admin/logout.svg"
            blurLink="/images/Admin/logout.png"
            containerClasses="w-[16px] h-[16px]"
          />
        </div>
        <p className="pb-[3px] font-urwgeometric text-[12px] text-s_error">Log Out</p>
      </button>
      <SideModal
        isVisible={isOpenLogoutModal}
        toggleModal={() => setIsOpenLogoutModal(!isOpenLogoutModal)}
      >
        <LogoutAlert handleClose={() => setIsOpenLogoutModal(!isOpenLogoutModal)} />
      </SideModal>
    </>
  )
}

export default LogoutButton
