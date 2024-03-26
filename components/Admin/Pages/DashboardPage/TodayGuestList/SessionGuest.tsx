import Media from "@/shared/Media"
import useTodayEvents from "@/hooks/useTodayEvents"
import ClipSpan from "@/components/ClipSpan"
import { useAuth } from "@/providers/AuthProvider"
import { DEFAULT_STUDIO_ID } from "@/lib/consts/global"
import convertTimeFormat from "@/lib/convertTimeFormat"
import Button from "../Button"

const SessionGuest = () => {
  const { userData } = useAuth()
  const selectedStudio = userData?.studioId || DEFAULT_STUDIO_ID
  const { events } = useTodayEvents(selectedStudio)
  return (
    <>
      {events.map((event) => (
        <div key={event.id} className="flex w-full justify-between px-[20px] py-[8px]">
          <div className="flex items-center gap-x-[10px]">
            <div className="size-[44px] rounded-full bg-gradient_s_1 p-[2px]">
              <Media
                type="image"
                link={event?.pfp || "/images/Admin/user_1.svg"}
                blurLink={event?.pfp || "/images/Admin/user_1.png"}
                containerClasses="w-full h-full rounded-full !overflow-hidden"
              />
            </div>
            <div>
              <div className="flex items-end gap-x-[4px]">
                <p className="font-urwgeometric_bold text-[12px] text-gray_2">
                  <ClipSpan className="pr-[4px] font-urwgeometric_bold text-[20px] ">
                    {event.bandName}
                  </ClipSpan>
                  {`+${event.comingPeople}`}
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
                <p className="font-urwgeometric_medium text-[12px] text-gray_1">
                  {convertTimeFormat(event.event.start.dateTime)} –{" "}
                  {convertTimeFormat(event.event.end.dateTime)}
                </p>
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
      ))}
    </>
  )
}

export default SessionGuest
