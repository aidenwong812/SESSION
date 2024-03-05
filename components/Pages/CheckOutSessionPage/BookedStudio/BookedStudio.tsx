import { useCheckOutSession } from "@/providers/CheckOutSessionProvider"
import Media from "@/shared/Media"
import getMonthName from "@/lib/getMonthName"
import getWeekDay from "@/lib/getWeekDay"

const BookedStudio = ({ className = "" }) => {
  const { sessionData } = useCheckOutSession()

  return (
    <div
      className={`flex h-[140px]
          w-full overflow-hidden rounded-[24px] md:h-[120px]
          md:rounded-[9.6px] lg:h-[140px] lg:rounded-[12.8px] xl:h-[160px]
          xl:rounded-[16px] ${className}`}
    >
      <div
        className="w-[140px]
              border-r-[2px] border-[#a1ea04]
              bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${sessionData.studio.photo}')`,
        }}
      />
      <div
        className={`relative grow bg-cover bg-center
          p-[10px] md:p-[9.6px] lg:p-[12.8px] xl:p-[16px]`}
        style={{
          backgroundImage: `url('${sessionData.studio.photo}')`,
        }}
      >
        <div
          className="absolute left-0 top-0
                  z-[1] size-full bg-[#121212db]"
        />
        <div className="relative z-[2] flex w-full justify-between">
          <p
            className={`flex items-center font-urwgeometric text-[12px]
            text-gray_2 samsungS8:text-[14px] md:text-[9.6px] lg:text-[12.8px] xl:text-[16px]`}
          >
            {getMonthName(sessionData.selectedDay.month)},&nbsp;
            <span className="text-[#A1EA04]">{sessionData.selectedDay.day}</span>
          </p>
          <p
            className={`text-right font-urwgeometric text-[9px]
            text-gray_2 samsungS8:text-[12px] md:text-[7.2px] lg:text-[9.6px] xl:text-[12px]`}
          >
            {getWeekDay(sessionData.selectedDay.day)}, <br />
            <span className="text-[12px] text-[#A1EA04] samsungS8:text-[14px] md:text-[9.6px] lg:text-[12.8px] xl:text-[16px]">
              {sessionData.event.start.dateTime.slice(11)} -{" "}
              {sessionData.event.end.dateTime.slice(11)}
            </span>
          </p>
        </div>
        <div
          className={`relative z-[3] my-[10px]
            h-[2px] w-full
            bg-[#ebe9e93b] md:my-[7.2px] lg:my-[9.6px] xl:my-[12px]`}
        />
        <div
          className="relative z-[2] flex
                  flex-col gap-y-[4px]"
        >
          <p
            className={`font-urwgeometric_bold
              text-[18px] leading-[100%] text-gray_1 md:text-[14.4px]
              lg:text-[19.2px] xl:text-[24px]`}
          >
            {sessionData.name}
          </p>
          <p
            className={`font-urwgeometric_bold text-[10px]
              leading-[100%] text-[#a1ea04] md:text-[8.4px] lg:text-[11.2px]
              xl:text-[14px]`}
          >
            Sound Studios
          </p>
          <div className="flex items-center gap-x-[5px]">
            <Media
              type="image"
              link="/images/BookSession/gray-users.svg"
              blurLink="/images/BookSession/gray-users.png"
              containerClasses="w-[10px] md:w-[9.6px] lg:w-[12.8px] xl:w-[16px] aspect-[1/1]"
              imageClasses="!object-contain"
            />
            <p
              className={`text-[10px] 
                text-gray_2 md:text-[7.2px] lg:text-[9.6px] xl:text-[12px]`}
            >
              {sessionData.studio.capacity}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookedStudio
