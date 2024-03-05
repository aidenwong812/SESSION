import Link from "next/link"
import Media from "@/shared/Media"
import ClipSpan from "@/components/ClipSpan"

const NotificationDetail = () => (
  <div>
    <div className="flex w-fit overflow-hidden rounded-[32px]">
      <div className="h-full overflow-hidden rounded-t-[32px] border-r-[2px] border-r-session">
        <Media
          type="image"
          link="/images/Admin/session_demo.svg"
          blurLink="/images/Admin/session_demo.png"
          containerClasses="w-[120px] h-[140px]"
        />
      </div>
      <div className="relative flex h-[140px] w-[260px] flex-col px-[15px] py-[10px]">
        <Media
          type="image"
          link="/images/Admin/session_demo_bg.svg"
          blurLink="/images/Admin/session_demo_bg.png"
          containerClasses="w-full h-full !absolute top-0 left-0 z-[1]"
        />
        <div className="relative z-[2] flex items-center justify-between border-b-[2px] border-b-gray_overlay_6">
          <p className="font-urwgeometric_bold text-[16px] text-gray_2">
            Jan, <ClipSpan className="!py-0">28</ClipSpan>
          </p>
          <div className="flex flex-col items-end">
            <p className="text-[14px] text-gray_2">Tuesday,</p>
            <div>
              <ClipSpan className="!py-0 text-[16px]">12:00AM - 4:00PM</ClipSpan>
            </div>
          </div>
        </div>
        <div className="relative z-[2] flex grow flex-col justify-end">
          <ClipSpan className="!py-0 font-urwgeometric text-[14px]">Sound Studios</ClipSpan>
          <p className="mt-[-5px] font-urwgeometric_semibold text-[24px] text-gray_1">Studio D</p>
          <div className="ml-[-5px] mt-[-5px] flex items-center">
            <Media
              type="image"
              link="/images/Admin/session-capacity.svg"
              blurLink="/images/Admin/session-capacity.png"
              containerClasses="w-[24px] h-[23px]"
            />
            <p className="font-urwgeometric_medium text-[12px] text-gray_1">6</p>
          </div>
        </div>
      </div>
    </div>
    <Link href="/session-requests">
      <a
        className="mt-[15px] flex h-[24px] w-[140px]
            items-center justify-center rounded-full bg-gray_overlay_6 pb-[5px] font-urwgeometric_bold text-[12px] text-gray_2"
      >
        See Session Request
      </a>
    </Link>
  </div>
)

export default NotificationDetail
