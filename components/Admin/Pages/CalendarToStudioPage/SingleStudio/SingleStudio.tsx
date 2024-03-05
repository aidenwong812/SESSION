/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import { useCalendar } from "@/providers/CalendarProvider"
import Button from "@/shared/Button"
import Media from "@/shared/Media"
import ClipSpan from "../../../../ClipSpan"

const SingleStudio = ({ className = "", data }) => {
  const { grantToCalendar } = useCalendar()

  return (
    <div
      className={`relative flex 
      h-[200px] w-full
      overflow-hidden rounded-[20px] border-x-[1px] border-b-[2px]
      border-t-[1px] border-transparent hover:border-[#a1ea04] md:h-[120px]
      md:rounded-[14.4px] lg:h-[160px] lg:rounded-[19.2px] xl:h-[200px]
      xl:rounded-[24px] ${className}`}
    >
      <div className="absolute left-0 top-0 z-[2] size-full overflow-hidden rounded-[20px] md:rounded-[14.4px] lg:rounded-[19.2px] xl:rounded-[24px]">
        <div
          className={`size-full cursor-pointer bg-gray_overlay_6
          bg-cover transition duration-[300ms]
          hover:scale-[1.1]`}
          style={{
            backgroundImage: `url('${data?.photo}')`,
          }}
        />
      </div>
      <div
        id="room-capcity"
        className="!absolute left-[10px] top-[10px] z-[10]
        flex aspect-[1/1] w-[44px] items-center 
        rounded-full bg-[#121211cc] bg-none font-urwgeometric_bold shadow-none
        backdrop-blur-[20px] md:left-[6px]
        md:top-[6px] lg:left-[8px] lg:top-[8px] xl:left-[10px] xl:top-[10px]"
      >
        <div className="flex w-full items-center justify-center gap-x-[1px]">
          <Media
            type="image"
            link="/images/BookSession/users.svg"
            blurLink="/images/BookSession/users.png"
            containerClasses="w-[20px] aspect-[1/1]"
          />
          <ClipSpan className="!py-0 text-[12px]">{data?.capacity}</ClipSpan>
        </div>
      </div>
      <div
        className="absolute bottom-[9px] left-[10px] z-[4] flex 
              w-[calc(100%-20px)] items-center justify-between rounded-full border-x-[1px]
              border-b-[2px] border-x-gray_overlay_6 border-b-gray_overlay_6
              bg-[#121211cc] px-[20px] py-[8px] backdrop-blur-[20px]
              md:px-[12px] md:py-[6px] lg:px-[16px] lg:py-[8px]
              xl:px-[20px] xl:py-[10px]"
      >
        <div className="flex items-center gap-x-[10px]">
          <p
            className="font-urwgeometric_bold
            text-gray_1 md:text-[14.4px] lg:text-[19.6px] 
            xl:text-[24px]"
          >
            {data?.name}
          </p>
        </div>
        <div className="flex items-center gap-x-[10px] md:gap-x-[6px] lg:gap-x-[8px] xl:gap-x-[10px]">
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
              4h
            </p>
          </div>
          <Button
            id="add-calendar"
            type="button"
            className="z-[3] h-[30px]
              rounded-full bg-gradient-to-r from-[#a1ea041f]
              to-[#daeb021f] 
              !px-[15px] font-urwgeometric text-gray_1
              shadow-[0px_12px_24px_0px_#0000003d] backdrop-blur-[20px] md:!text-[9.6px] lg:!text-[12.8px] xl:!text-[16px]"
            pulseColor="white"
            bgVariant="primary"
            onClick={() => grantToCalendar(data?.id, data?.name)}
          >
            <ClipSpan className="!py-0 !leading-[100%]">Add Calendar</ClipSpan>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SingleStudio
