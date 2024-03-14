import { useRouter } from "next/router"
import Button from "@/shared/Button"
import Media from "@/shared/Media"
import useIsMobile from "@/hooks/useIsMobile"
import ClipSpan from "../../../ClipSpan"

const BookedProject = () => {
  const router = useRouter()
  const isMobile = useIsMobile()

  return (
    <div className="flex h-full flex-col">
      <div
        className="relative mt-[130px] w-[80%] self-center rounded-[24px]
      bg-[#121211cc] px-[20px] py-[10px] md:mt-[40px] md:translate-x-[50px] md:self-start md:rounded-[14.4px] md:py-[20px]
      md:pl-[48px] md:pr-[24px] lg:rounded-[19.2px] xl:rounded-[24px]"
      >
        <Media
          type="image"
          link="/images/BookProject/success.svg"
          blurLink="/images/BookProject/success.png"
          containerClasses="w-[200px] aspect-[1/1] !absolute left-[calc(50%-100px)] md:left-[-100px] top-[-140px] md:top-[-70px]"
        />
        <ClipSpan className="bg-gradient-to-r from-[#FF6A2B] to-[#FF442B] font-urwgeometric_bold text-[20px]">
          Electic Lady Studio
        </ClipSpan>
        <p className="pt-[4px] font-urwgeometric text-[10px] text-gray_2">
          Consisting of 3 tracks:
        </p>

        <ul className="pl-[20px] pt-[12px]">
          <li className="list-disc font-urwgeometric text-[12px] text-gray_1">Track 1</li>
          <li className="list-disc font-urwgeometric text-[12px] text-gray_1">Track 2</li>
          <li className="list-disc font-urwgeometric text-[12px] text-gray_1">Track 3</li>
        </ul>
      </div>
      <div className="flex grow flex-col justify-end">
        <p
          className="pb-[10px]
                font-urwgeometric_medium text-[32px] leading-[90%] text-gray_1 md:pb-[15px]
                md:text-[64px]"
        >
          {isMobile ? (
            <>
              Your <span className="text-project">Project</span> has <br />
              been submitted.
            </>
          ) : (
            <>
              Your <span className="text-project">Project</span> has been <br />
              submitted.
            </>
          )}
        </p>
        <p
          className="font-urwgeometric_medium text-[16px]
                        text-gray_1
                        md:pt-[1.5vh]"
        >
          <ClipSpan>Sound Studios</ClipSpan> has received your project inquiry. Please allow up to
          48
          <br />
          hours for the studio to review your details and get back to you.
        </p>
        <Button
          id="back-book-type"
          type="button"
          className="mt-[20px] h-[40px] w-full border-x-[1px] border-b-[2px]
                    border-x-[#A1EA04] border-b-[#A1EA04]
                    font-urwgeometric_bold text-black
                    shadow-[0px_0px_40px_0px_#a1ea0466] md:mt-[14.4px]
                    md:h-[28.8px] md:text-[9.6px]
                    lg:mt-[19.2px]
                    lg:h-[38.4px] lg:text-[12.8px] xl:mt-[24px]
                    xl:h-[48px] xl:text-[16px]"
          pulseColor="white"
          onClick={() => router.push("/booktype")}
        >
          Back to the Studio
        </Button>
      </div>
    </div>
  )
}

export default BookedProject
