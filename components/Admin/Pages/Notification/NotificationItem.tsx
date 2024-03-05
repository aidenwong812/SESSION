import Media from "@/shared/Media"
import ClipSpan from "../../../ClipSpan"
import NotificationDetail from "./NotificationDetail"

const NotificationItem = () => (
  <div
    className="flex w-full max-w-[480px] flex-col
        items-end rounded-[32px] border-x border-b-[2px] border-x-gray_overlay_6 border-b-gray_overlay_6
        bg-gray_overlay_6 p-[20px]"
  >
    <div className="flex w-full items-start gap-x-[8px]">
      <div className="size-[60px] rounded-full bg-gradient_s_1 p-[2px] shadow-[0px_0px_24px_0px_#a1ea0470]">
        <Media
          type="image"
          link="/images/Admin/user_1.svg"
          blurLink="/images/Admin/user_1.png"
          containerClasses="w-full h-full rounded-full"
        />
      </div>
      <div className="">
        <p className="font-urwgeometric_bold text-[16px] text-gray_1">Emily Rose</p>
        <div className="flex items-center gap-x-[4px]">
          <div className="size-[4px] rounded-full bg-gradient_s_1" />
          <ClipSpan className="!py-0 font-urwgeometric_bold text-[12px]">
            Requested a Session
          </ClipSpan>
        </div>
      </div>
    </div>
    <NotificationDetail />
  </div>
)

export default NotificationItem
