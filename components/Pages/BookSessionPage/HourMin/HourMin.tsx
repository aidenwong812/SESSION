import Media from "@/shared/Media"

const HourMin = ({ minimumHours }) => (
  <div className="flex items-center">
    <div className="overflow-hidden rounded-full">
      <Media
        type="image"
        link="/images/BookSession/Clock.svg"
        blurLink="/images/BookSession/Clock.png"
        containerClasses="w-[28px] md:w-[16.8px] lg:w-[22.4px] xl:w-[28px] aspect-[1/1]"
      />
    </div>
    <p className="font-urwgeometric text-gray_1 md:text-[8.4px] md:leading-[80%] lg:text-[11.2px] xl:text-[14px]">
      {`${minimumHours}h`}
    </p>
  </div>
)

export default HourMin
