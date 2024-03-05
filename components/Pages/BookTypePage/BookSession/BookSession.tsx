import { useRouter } from "next/router"
import { useState } from "react"
import Button from "@/shared/Button"
import Media from "@/shared/Media"
import { useAuth } from "@/providers/AuthProvider"
import createVisitEvent from "@/lib/createVisitEvent"
import ClipSpan from "../../../ClipSpan"
import GreenGodRayAnimation from "../GreenGodRayAnimation"

const BookSession = () => {
  const { push } = useRouter()
  const [isHovered, setIsHovered] = useState(false)
  const { userData } = useAuth()

  const handleBookSession = async () => {
    createVisitEvent(userData.email)
    push("/booksession")
  }

  return (
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <div
      className="relative flex
      h-[200px] w-full
      flex-col justify-between overflow-hidden
      rounded-[24px] border-x-[1px] border-b-[2px] border-x-gray_overlay_6 
      border-b-gray_overlay_6 p-[10px] samsungS8:h-[220px] samsungS8:p-[20px] md:h-[200px]
      md:rounded-[14.4px] md:p-[12px] lg:h-[230px] lg:rounded-[19.2px] lg:p-[16px]
      xl:h-[280px] xl:rounded-[24px] xl:p-[20px]"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div
        className={`absolute left-0 top-0 z-[-1] size-full ${
          isHovered ? "opacity-[1]" : "opacity-[0.5]"
        }`}
      >
        <GreenGodRayAnimation />
      </div>
      <div>
        <div className="flex translate-x-[-10px] items-center gap-x-0">
          <Media
            type="image"
            link="/images/BookType/symbol.svg"
            blurLink="/images/BookType/symbol.png"
            containerClasses="w-[25px] aspect-[15.5/24] lg:w-[41px] md:w-[30.75px] md:aspect-[41/51]"
          />
          <p
            className="font-urwgeometric_bold text-[24px] leading-[100%] text-gray_1 
            md:text-[14.4px] lg:text-[19.2px]
            xl:text-[24px]"
          >
            Session
          </p>
        </div>
        <p
          className="font-urwgeometric text-[11px] text-gray_1 
          samsungS8:text-[13px] md:text-[9.6px] lg:text-[12.8px] xl:text-[16px]"
        >
          <ClipSpan>Pay per hour.</ClipSpan> Use the time according to your needs.
        </p>
      </div>
      <div>
        <Media
          type="image"
          link="/images/BookType/symbol-3d.svg"
          blurLink="/images/BookType/symbol-3d.png"
          containerClasses="!absolute w-[230px] samsungS8:w-[250px] lg:w-[300px] aspect-[335/259] 
          top-[20px] samsungS8:top-[20px] md:top-[5px] xl:top-[40px]
          right-[10px] z-[-1]"
        />
        <Button
          id="select-session"
          type="button"
          className="h-[40px] w-full border-x-[1px] border-b-[2px] border-x-[#A1EA04]
            border-b-[#A1EA04] font-urwgeometric_bold
            text-black shadow-[0px_0px_40px_0px_#a1ea0466]
            md:h-[28.8px] md:text-[9.6px]
            lg:h-[38.4px] lg:text-[12.8px]
            xl:h-[48px]
            xl:text-[16px]"
          pulseColor="white"
          onClick={handleBookSession}
        >
          Book a Session
        </Button>
      </div>
    </div>
  )
}

export default BookSession
