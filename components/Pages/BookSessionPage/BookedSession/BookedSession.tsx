import { useRouter } from "next/router"
import Button from "@/shared/Button"
import Media from "@/shared/Media"
import useIsMobile from "@/hooks/useIsMobile"
import { useBookSession } from "@/providers/BookSessionProvider"
import ClipSpan from "@/components/ClipSpan"
import BookedStudio from "../BookedStudio"

const BookedSession = () => {
  const { push, query } = useRouter()
  const isMobile = useIsMobile()
  const { isBookedOnProject } = useBookSession()

  return (
    <>
      <div className="max-h-[500px]">
        <Media
          type="image"
          link="/images/BookSession/success.svg"
          blurLink="/images/BookSession/success.png"
          containerClasses="w-[220px] md:w-[400px] aspect-[400/302]
          translate-x-[-30px] translate-y-[-50px] md:translate-y-[-100px]"
        />
        <div className="translate-y-[-80px] md:translate-y-[-170px]">
          <p
            className="pb-[15px]
            font-urwgeometric_medium text-[34px] leading-[90%] text-gray_1
            md:text-[64px]"
          >
            <ClipSpan>Session</ClipSpan> requested.
          </p>
          <p
            className="font-urwgeometric text-[12px] text-gray_1 samsungS8:text-[14px] xs:text-[16px]
              md:text-[16px]"
          >
            {isMobile ? (
              <>
                You successfully requested your Session. The studio
                <br />
                will get back to you very soon and accept or deny
                <br />
                your request. We’ve also sent you an email.
              </>
            ) : (
              <>
                You successfully requested your Session. The studio will get back to you very soon
                <br />
                and accept or deny your request. We’ve also sent you an email.
              </>
            )}
          </p>
          <BookedStudio className="mt-[20px] md:mt-[24px] md:!h-[160px] md:!rounded-[32px] lg:mt-[32px] xl:mt-[40px]" />
        </div>
      </div>
      {isBookedOnProject && (
        <div className="flex items-center gap-x-[5px]">
          <p className="font-urwgeometric_bold text-[12px] text-gray_1 samsungS8:text-[16px]">
            As part of your Project:
          </p>
          <div
            className="flex max-w-[190px] grow items-center justify-center
        rounded-full border border-[#ff442b] bg-[#ff442b29] pr-[10px]"
          >
            <Media
              type="image"
              link="/images/BookSession/star.svg"
              blurLink="/image/BookSession/star.png"
              containerClasses="w-[30px] samsungS8:w-[44px] aspect-[1/1]"
            />
            <ClipSpan
              className="bg-gradient-to-r from-[#FF6A2B] to-[#FF442B] font-urwgeometric_bold text-[12px]
          samsungS8:text-[16px]"
            >
              The Color Violet
            </ClipSpan>
          </div>
        </div>
      )}
      <div className="flex grow items-end justify-center">
        <Button
          id="back-book-type"
          type="button"
          className="h-[48px] w-full border-x-[1px] border-b-[2px] border-x-[#A1EA04]
          border-b-[#A1EA04] font-urwgeometric_bold
          text-black shadow-[0px_0px_40px_0px_#a1ea0466]
          md:mt-[14.4px] md:h-[28.8px]
          md:text-[9.6px] lg:mt-[19.2px]
          lg:h-[38.4px]
          lg:text-[12.8px] xl:mt-[24px] xl:h-[48px]
          xl:text-[16px]"
          pulseColor="white"
          onClick={() => push(`/${query.studio}/booktype`)}
        >
          Back to the Studio
        </Button>
      </div>
    </>
  )
}

export default BookedSession
