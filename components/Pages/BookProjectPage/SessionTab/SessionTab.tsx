import { useRouter } from "next/router"
import Media from "@/shared/Media"
import useIsMobile from "@/hooks/useIsMobile"
import ClipSpan from "../../../ClipSpan"

const SessionTab = () => {
  const { query, push } = useRouter()
  const isMobile = useIsMobile()
  const studioId = query.studio

  return (
    <button
      className="relative top-[10px] aspect-[130/40] w-[130px] cursor-pointer overflow-hidden 
      rounded-full px-[1.5px] pb-[2.5px] md:aspect-[240/48]
      md:w-[144px] lg:w-[192px]
      xl:w-[240px]"
      type="button"
      onClick={() => push(`/${studioId}/booksession`)}
    >
      <div
        className="absolute
              left-0 top-0 z-[2]
              h-[250%] w-[100%] translate-y-[-40px]
              rotate-[3deg]
              bg-gradient-to-r from-transparent from-5% via-[#DAEB02]
              via-20% to-transparent to-90%"
      />
      <div
        className="absolute
              left-0 top-0 z-[3]
              h-[250%] w-[100%] translate-y-[-40px]
              rotate-[3deg]
              bg-gradient-to-r from-[#121211] from-30%
              via-40%
              to-transparent opacity-[0.5]"
      />
      <div
        className="relative z-[4] flex
              size-full items-center justify-center
              rounded-full
              bg-gradient-to-r from-[#2525278c] via-[#2525278c]
              to-[#2525278c]
              backdrop-blur-[6px]"
      >
        <Media
          type="image"
          link="/images/BookSession/symbol.svg"
          blurLink="/images/BookSession/symbol.png"
          containerClasses="w-[25px] md:w-[20.4px] lg:w-[27.2px] xl:w-[34px]
          aspect-[1/1]"
        />
        <p
          className="text-left font-urwgeometric_bold
          text-[12px] leading-[100%] text-gray_1 md:text-[7.2px]
          lg:text-[9.6px] xl:text-[12px]"
        >
          {isMobile ? (
            <>
              Only need one?
              <br />
              <ClipSpan className="border-b border-b-[#a1ea04]">Session</ClipSpan>.
            </>
          ) : (
            <>
              Only need one session?
              <br />
              Switch to{" "}
              <span className="text-[#A1EA04] underline">
                <ClipSpan className="underline">Session</ClipSpan>
              </span>
              .
            </>
          )}
        </p>
      </div>
    </button>
  )
}

export default SessionTab
