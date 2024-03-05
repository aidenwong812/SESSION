import Media from "@/shared/Media"
import ClipSpan from "../../../../ClipSpan"
import Button from "../Button"

const ProjectGuest = () => (
  <div className="flex w-full justify-between px-[20px] py-[8px]">
    <div className="flex items-center gap-x-[10px]">
      <div className="size-[44px] rounded-full bg-gradient_s_1 p-[2px]">
        <Media
          type="image"
          link="/images/Admin/user_2.svg"
          blurLink="/images/Admin/user_2.png"
          containerClasses="w-full h-full rounded-full"
        />
      </div>
      <div>
        <div className="flex items-end gap-x-[4px]">
          <p className="font-urwgeometric_bold text-[12px] text-gray_2">
            <ClipSpan className="pr-[4px] font-urwgeometric_bold text-[20px] ">Lara</ClipSpan>+1
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
              containerClasses="w-[22px] h-[22px]"
              type="image"
              link="/images/Admin/project.svg"
              blurLink="/images/Admin/project.png"
            />
            <p className="font-urwgeometric_bold text-[12px] text-gray_1">Project</p>
          </div>
          <div className="size-[4px] rounded-full bg-gradient_s_1" />
          <p className="font-urwgeometric_medium text-[12px] text-gray_1">6:00PM - 8:30PM</p>
        </div>
      </div>
    </div>
    <div className="flex items-center gap-x-[20px]">
      <div className="flex items-center">
        <Media
          type="image"
          link="/images/Admin/guest_project.svg"
          blurLink="/images/Admin/guest_project.png"
          containerClasses="w-[30px] h-[30px]"
        />
        <p className="pb-[5px] font-urwgeometric_bold text-[12px] text-gray_1">2/8</p>
      </div>
      <Button>
        <p className="pb-[5px] font-urwgeometric_bold text-[16px] text-black_0">Details</p>
      </Button>
    </div>
  </div>
)

export default ProjectGuest
