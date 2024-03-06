import { useState } from "react"
import ClipSpan from "@/components/ClipSpan"
import Button from "@/shared/Button"
import Media from "@/shared/Media"
import getMonthName from "@/lib/getMonthName"
import convertTimeFormat from "@/lib/convertTimeFormat"
import getWeekDay from "@/lib/getWeekDay"
import RequestDetailModal from "../RequestDetailModal"

const Request = ({ request }) => {
  const [isOpenDetailModal, setIsOpenDetailModal] = useState(false)

  return (
    <>
      <div className="flex !h-[134px] w-full items-center justify-between overflow-hidden rounded-3xl">
        <div
          className="relative h-full w-1/4 max-w-60 border-r-2 border-r-session
                bg-[url('/images/Admin/session-requests-studio-1.png')] bg-cover bg-center"
        />
        <div
          className="relative flex h-full grow
                flex-col justify-between bg-[url('/images/Admin/session-requests-studio-1.png')] bg-cover
                bg-center px-5 py-4"
        >
          <div className="absolute left-0 top-0 size-full bg-black_3" />
          <div className="relative z-20 flex w-full items-center justify-between">
            <p className="font-urwgeometric text-xl leading-none text-gray_2">
              {getMonthName(request.selectedDay.month)},{" "}
              <ClipSpan>{request.selectedDay.day}</ClipSpan>
            </p>
            <div>
              <p className="text-right font-urwgeometric text-sm leading-none text-gray_2">
                {getWeekDay(request.selectedDay)},
              </p>
              <ClipSpan className="font-urwgeometric text-sm leading-none">
                {convertTimeFormat(request.event.start.dateTime)} –{" "}
                {convertTimeFormat(request.event.end.dateTime)}
              </ClipSpan>
            </div>
          </div>
          <div className="relative z-20 h-0.5 w-full bg-gray_overlay_3" />
          <div className="relative z-20 flex w-full items-center justify-between">
            <div>
              <p className="font-urwgeometric_semibold text-2xl text-gray_1">
                {request.studio.name}
              </p>
              <div className="flex items-center">
                <Media
                  type="image"
                  link="/images/Admin/session-requests-capacity.svg"
                  blurLink="/images/Admin/session-requests-capacity.png"
                  containerClasses="w-[24px] h-[24px]"
                />
                <p className="font-urwgeometric_semibold text-sm leading-none text-gray_2">
                  {request.comingPeople}
                </p>
              </div>
            </div>
            <div className="relative z-[2] flex h-full flex-col justify-around">
              <p className="text-right font-urwgeometric text-sm leading-none text-gray_2">
                Artist/Band
              </p>
              <div className="flex items-center gap-x-1">
                <Media
                  type="image"
                  containerClasses="w-4 h-4 rounded-full !overflow-hidden"
                  link="/images/Admin/session-requests-avatar.svg"
                  blurLink="/blurLink/Admin/session-requests-avatar.png"
                />
                <p className="font-urwgeometric text-base leading-none text-gray_1">
                  {request.bandName}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-full w-1/4 max-w-48 items-center justify-center bg-gray_overlay_3 p-4">
          <Button
            id="see-details"
            type="button"
            className="w-full max-w-32 bg-gradient-to-r from-[#a1ea041f]
                        to-[#daeb021f] px-4 py-1
                        shadow-session_shadow"
            pulseColor="white"
            bgVariant="radial"
            onClick={() => setIsOpenDetailModal(!isOpenDetailModal)}
          >
            <p className="font-urwgeometric_semibold text-[12px] leading-[20px] text-black_0">
              See Details
            </p>
          </Button>
        </div>
      </div>
      <RequestDetailModal
        request={request}
        isVisible={isOpenDetailModal}
        toggleModal={() => setIsOpenDetailModal(!isOpenDetailModal)}
      />
    </>
  )
}

export default Request
