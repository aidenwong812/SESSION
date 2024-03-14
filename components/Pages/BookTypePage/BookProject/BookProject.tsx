import { useRouter } from "next/router"
import { useState } from "react"
import Button from "@/shared/Button"
import Media from "@/shared/Media"
import useIsMobile from "@/hooks/useIsMobile"
import { useAuth } from "@/providers/AuthProvider"
import createVisitEvent from "@/lib/createVisitEvent"
import RedGodRayAnimation from "../RedGodRayAnimation"

const BookProject = () => {
  const { push, query } = useRouter()
  const isMobile = useIsMobile()
  const [isHovered, setIsHovered] = useState(false)
  const { userData } = useAuth()

  const handleClick = () => {
    createVisitEvent(userData.email)
    push({
      pathname: "/[studio]/bookproject",
      query: { studio: query.studio },
    })
  }

  return (
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <div
      className="relative flex
      h-[200px] w-full flex-col
      justify-between overflow-hidden rounded-[24px]
      border-x-[1px] border-b-[2px] border-x-gray_overlay_6 border-b-gray_overlay_6 
      p-[10px] samsungS8:h-[220px] samsungS8:p-[20px] md:h-[200px] md:rounded-[14.4px]
      md:p-[12px] lg:h-[230px] lg:rounded-[19.2px] lg:p-[16px]
      xl:h-[280px] xl:rounded-[24px] xl:p-[20px]"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div
        className={`absolute left-0 top-0 z-[-1] size-full ${
          isHovered ? "opacity-[1]" : "opacity-[0.5]"
        }`}
      >
        <RedGodRayAnimation />
      </div>
      <div
        className={`absolute inset-0 bg-[url('/images/BookType/noise_texture.png')]
        bg-cover bg-[top_center] ${isHovered ? "opacity-[1]" : "opacity-[0.7]"}`}
      />
      <div>
        <div
          className="flex translate-x-[-10px] items-center
                gap-x-0"
        >
          <Media
            type="image"
            link="/images/BookType/project.svg"
            blurLink="/images/BookType/project.png"
            containerClasses="w-[50px] lg:w-[44px] md:w-[33px] aspect-[1/1]"
          />
          <p
            className="font-urwgeometric_bold text-[24px] leading-[100%] text-gray_1 
            md:text-[14.4px] lg:text-[19.2px]
            xl:text-[24px]"
          >
            Project
          </p>
        </div>
        <p
          className="font-urwgeometric text-[11px] text-gray_1 
          samsungS8:text-[13px] md:text-[9.6px] lg:text-[12.8px] xl:text-[16px]"
        >
          {isMobile ? (
            <>
              Receive full-service from recording and production
              <br />
              master of your song, EP or album.
            </>
          ) : (
            <>
              Receive full-service from recording and production to the final
              <br />
              master of your song, EP or album.
            </>
          )}
        </p>
      </div>
      <div>
        <Media
          type="image"
          link="/images/BookType/project-3d.svg"
          blurLink="/images/BookType/project-3d.png"
          containerClasses="!absolute w-[120px] samsungS8:w-[160px] lg:w-[180px] aspect-[188/216] 
          top-[55px] samsungS8:top-[40px] md:top-[35px] xl:top-[65px] z-[-1]
          right-0"
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
          onClick={handleClick}
        >
          Start a Project
        </Button>
      </div>
    </div>
  )
}

export default BookProject
