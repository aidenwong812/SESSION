import { useRouter } from "next/router"
import Spline from "@splinetool/react-spline"
import Button from "@/shared/Button"
import useIsMobile from "@/hooks/useIsMobile"
import { useCheckOutSession } from "@/providers/CheckOutSessionProvider"
import BookedStudio from "../BookedStudio"
import ClipSpan from "../../../ClipSpan"
import Layout from "../../../Layout"
import FadeIn from "../../../FadeIn"
import LoadingPage from "../../LoadingPage"

const BookedSuccess = () => {
  const router = useRouter()
  const isMobile = useIsMobile()
  const { addToCalendar, loading, sessionData } = useCheckOutSession()

  if (!sessionData) return <LoadingPage />

  return (
    <Layout type={isMobile ? "mobile_dark" : "full"}>
      <FadeIn className="flex h-full flex-col pt-[60px] md:pt-0">
        <div>
          <Spline
            scene="https://prod.spline.design/lRsoMH0pKRD6OM2i/scene.splinecode"
            style={{
              width: isMobile ? "100px" : "250px",
              height: isMobile ? "100px" : "188.75px",
              marginTop: "20px",
              transform: isMobile ? "translateX(-20px)" : "translateX(-70px)",
            }}
          />
          <p
            className="pb-[15px]
          font-urwgeometric_medium text-[34px] leading-[90%] text-gray_1
          md:text-[64px]"
          >
            <ClipSpan>Session</ClipSpan> booked.
          </p>
          <p
            className="font-urwgeometric text-[12px] text-gray_1 samsungS8:text-[14px]
            md:text-[16px]"
          >
            {isMobile ? (
              <>
                You successfully booked your Session. Add it to your <br /> calendar below and enjoy
                your time in the studio!
              </>
            ) : (
              <>
                You successfully booked your Session. Add it to your calendar below and enjoy <br />{" "}
                your time in the studio!
              </>
            )}
          </p>
        </div>
        <BookedStudio className="mt-[20px] md:mt-[40px]" />
        <div
          className="flex grow
          flex-col justify-end gap-y-[10px]"
        >
          <Button
            id="back-book-type"
            type="button"
            className="h-[48px] w-full border-x-[1px] border-b-[2px] border-t-[1px]
            border-[#A1EA04] !bg-transparent
            !bg-none font-urwgeometric_bold
            !text-[#A1EA04]
            shadow-[0px_0px_40px_0px_#a1ea0466] md:mt-[14.4px]
            md:h-[28.8px] md:text-[9.6px]
            lg:mt-[19.2px] lg:h-[38.4px] lg:text-[12.8px] xl:mt-[24px]
            xl:h-[48px] xl:text-[16px]"
            pulseColor="white"
            onClick={() => router.push("/mkDfxshbbVnhsHU4CVag/booktype")}
            bgVariant="primary"
          >
            Back to the Studio
          </Button>
          <Button
            id="add-calendar"
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
            onClick={addToCalendar}
            disabled={loading}
          >
            Add To Calendar
          </Button>
        </div>
      </FadeIn>
    </Layout>
  )
}

export default BookedSuccess
