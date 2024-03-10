import Media from "@/shared/Media"

const ComingPeople = ({ event }) => (
  <div className="mt-[50px] w-full">
    <p
      className="pb-[10px] pl-[20px] font-urwgeometric
            text-[14px] leading-[100%] text-gray_1"
    >
      How many people are coming to the studio?
    </p>
    <div className="relative size-full overflow-hidden rounded-full">
      <div
        className="h-[48px]
                    w-full
                    border-x-[1px] border-b-[2px] border-x-gray_overlay_6
                    border-b-gray_overlay_6 bg-gray_overlay_6
                    px-[30px]
                    font-urwgeometric text-gray_2
                    shadow-[12px_12px_32px_0px_#15151499,-12px_-12px_32px_0px_#40403b33]
                    backdrop-blur-[12px]"
      />
      <div
        className="absolute left-0 top-0 flex h-full
         w-fit items-center justify-between
         pb-[7px] pl-[10px] md:pl-[12px] lg:pl-[16px]
         xl:pl-[20px]"
      >
        <Media
          type="image"
          link="/images/BookSession/coming-people.svg"
          blurLink="/images/BookSession/coming-people.png"
          containerClasses="w-[29px] aspect-[29/27]"
        />
        <p className="font-urwgeometric text-[16px] leading-[16px] text-gray_2">
          {event.comingPeople}
        </p>
      </div>
    </div>
  </div>
)

export default ComingPeople
