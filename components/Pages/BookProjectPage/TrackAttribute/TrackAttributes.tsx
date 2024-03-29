import Media from "@/shared/Media"
import ClipSpan from "../../../ClipSpan"

const TrackAttribute = ({ data }) => (
  <div className="flex items-center gap-x-[5px] pl-[10px] md:pl-[18px] lg:pl-[24px] xl:pl-[30px]">
    <div
      className="flex aspect-[1/1] w-[16px] items-center justify-center rounded-full
      bg-gradient_s_1 shadow-[0px_0px_12px_0px_#a1ea0499] md:w-[10.8px]
      lg:w-[14.4px] xl:w-[18px]"
    >
      <Media
        type="image"
        link="/images/BookProject/check.svg"
        blurLink="/images/BookProject/check.png"
        containerClasses="h-[8px] md:h-[7.2px] lg:h-[9.6px] xl:h-[12px] aspect-[21/20]"
      />
    </div>
    {Object.entries(data).map(
      ([id], i) =>
        id !== "name" && (
          // eslint-disable-next-line react/no-array-index-key
          <div className="flex items-center gap-x-[5px]" key={i}>
            {i !== 0 && <div className="aspect-[1/1] w-[4px] rounded-full bg-gray_2" />}
            <ClipSpan
              className="font-urwgeometric_medium text-[14px] capitalize leading-[20px] md:text-[8.4px] lg:text-[11.2px]
            xl:text-[14px]"
            >
              {id}
            </ClipSpan>
          </div>
        ),
    )}
  </div>
)

export default TrackAttribute
