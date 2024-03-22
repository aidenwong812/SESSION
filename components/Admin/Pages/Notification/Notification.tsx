import { useState } from "react"
import Icon from "@/components/ui/Icon"
import SideModal from "../../../SideModal"
import Notifications from "./Notifications"
import LocalDateTime from "./DateTime"

const Notification = () => {
  const [isOpenNotificationModal, setIsOpenNotificationModal] = useState(false)

  return (
    <div className="flex w-full items-center justify-end gap-x-[24px] py-[24px]">
      <LocalDateTime />
      <button
        type="button"
        className="relative flex size-[44px] items-center justify-center
              rounded-full border-x border-b-[2px] border-x-gray_overlay_6 border-b-gray_overlay_6 bg-gray_overlay_6"
        onClick={() => setIsOpenNotificationModal(true)}
      >
        <Icon name="BellSimple" />
        <div
          className="absolute right-[0px] top-[-3px] flex size-[14px] 
                  items-center justify-center rounded-full bg-black_1 p-[3px]"
        >
          <div className="size-[8px] rounded-full bg-gradient_s_1 shadow-[0px_0px_15px_0px_#a1ea04]" />
        </div>
      </button>
      <SideModal
        isVisible={isOpenNotificationModal}
        toggleModal={() => setIsOpenNotificationModal(!isOpenNotificationModal)}
      >
        <Notifications />
      </SideModal>
    </div>
  )
}

export default Notification
