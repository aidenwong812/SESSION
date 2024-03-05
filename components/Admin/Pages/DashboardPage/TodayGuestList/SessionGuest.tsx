import Media from "@/shared/Media"
import ClipSpan from "../../../../ClipSpan"
import Button from "../Button"

const SessionGuest = () => (
  <div className="flex w-full justify-between px-[20px] py-[8px]">
    <div className="flex items-center gap-x-[10px]">
      <div className="size-[44px] rounded-full bg-gradient_s_1 p-[2px]">
        <Media
          type="image"
          link="/images/Admin/user_1.svg"
          blurLink="/images/Admin/user_1.png"
          containerClasses="w-full h-full rounded-full"
        />
      </div>
      <div>
        <div className="flex items-end gap-x-[4px]">
          <p className="font-urwgeometric_bold text-[12px] text-gray_2">
            <ClipSpan className="pr-[4px] font-urwgeometric_bold text-[20px] ">Max</ClipSpan>+3
          </p>
          <Media
            type="image"
            link="/images/Admin/capacity.svg"
            blurLink="/images/Admin/capacity.png"
            containerClasses="w-[12px] h-[12px]"
          />
        </div>
        <div className="ml-[-5px] flex items-center gap-x-[5px]">
          <div className="flex items-center">
            <Media
              containerClasses="w-[20px] h-[24px]"
              type="image"
              link="/images/Admin/guest_logo.svg"
              blurLink="/images/Admin/guest_logo.png"
            />
            <p className="font-urwgeometric_bold text-[12px] text-gray_1">Session</p>
          </div>
          <div className="size-[4px] rounded-full bg-gradient_s_1" />
          <p className="font-urwgeometric_medium text-[12px] text-gray_1">6:00PM - 8:30PM</p>
        </div>
      </div>
    </div>
    <div className="flex items-center gap-x-[20px]">
      <p className="font-urwgeometric_bold text-[12px] text-gray_1">$250,00</p>
      <Button>
        <p className="font-urwgeometric_bold text-[16px] text-black_0">Details</p>
      </Button>
    </div>
  </div>
)

export default SessionGuest
