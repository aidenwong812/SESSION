import { useRouter } from "next/router"
import Media from "@/shared/Media"
import useIsMobile from "@/hooks/useIsMobile"

const ProjectTab = () => {
  const router = useRouter()
  const isMobile = useIsMobile()

  return (
    <button
      className="relative top-[10px] aspect-[130/40] w-[130px] cursor-pointer overflow-hidden
      rounded-full px-[1px] pb-[2px] md:aspect-[240/48]
      md:w-[144px] lg:w-[192px]
      xl:w-[240px]"
      onClick={() => router.push("/bookproject")}
      type="button"
    >
      <div
        className="absolute
              left-0 top-0 z-[1]
              h-[250%] w-[100%] translate-y-[-40px]
              rotate-[3deg]
              bg-gradient-to-r
              from-[#ff6a2b3d] from-10% via-[#FF6A2B]
              via-30%
              to-[#ff6a2b3d] opacity-[0.6]"
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
          link="/images/BookSession/star.svg"
          blurLink="/images/BookSession/star.png"
          containerClasses="w-[35px] md:w-[26.4px] lg:w-[35.2px] xl:w-[44px]
          aspect-[1/1]"
        />
        <p
          className="text-left font-urwgeometric text-[12px] 
          leading-[100%] text-gray_1 md:font-urwgeometric_bold md:text-[7.2px] lg:text-[9.6px]
          xl:text-[12px]"
        >
          {isMobile ? (
            <>
              Need more?
              <br />
              <span className="text-[#FF6A2B] underline">Projects</span>.
            </>
          ) : (
            <>
              Need multiple Sessions?
              <br />
              Switch to <span className="text-[#FF6A2B] underline">Projects</span>.
            </>
          )}
        </p>
      </div>
    </button>
  )
}

export default ProjectTab
