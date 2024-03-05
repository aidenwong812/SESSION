import Media from "@/shared/Media"

const TrackItem = ({ label, selected = false, toggleItem }) => (
  <button
    className="flex cursor-pointer flex-col items-center gap-y-[5px] md:gap-y-[12px]"
    onClick={toggleItem}
    type="button"
  >
    <p className="font-urwgeometric text-[12px] text-gray_2 md:text-[8.4px] lg:text-[11.8px] xl:text-[14px]">
      {label}
    </p>
    <div
      className="flex aspect-[1/1] w-[38px] items-center
            justify-center rounded-full
            border-x-[1px] border-b-[2px]
            border-x-gray_overlay_6 border-b-gray_overlay_6 bg-gray_overlay_6 shadow-[13.5px_13.5px_36px_0px_#15151499,-13.5px_-13.5px_36px_0px_#40403b33]
            backdrop-blur-[20px]
            samsungS8:w-[44px] md:w-[26.4px] lg:w-[35.2px] xl:w-[44px]"
    >
      {selected && (
        <div
          className="flex aspect-[1/1] w-[32px] items-center justify-center rounded-full bg-gradient_s_1
           samsungS8:w-[34px] md:w-[19.2px] lg:w-[25.6px] xl:w-[32px]"
        >
          <Media
            type="image"
            link="/images/BookProject/check.svg"
            blurLink="/images/BookProject/check.png"
            containerClasses="h-[20px] md:h-[12px] lg:h-[16px] xl:h-[20px] aspect-[21/20]"
          />
        </div>
      )}
    </div>
  </button>
)

export default TrackItem
