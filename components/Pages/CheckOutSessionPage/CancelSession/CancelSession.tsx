import { useRouter } from "next/router"
import Button from "@/shared/Button"
import useIsMobile from "@/hooks/useIsMobile"
import Layout from "@/components/Layout"
import FadeIn from "@/components/FadeIn"
import ClipSpan from "@/components/ClipSpan"
import Media from "@/shared/Media"
import { useCheckOutSession } from "@/providers/CheckOutSessionProvider"
import LoadingPage from "../../LoadingPage"

const CancelSession = () => {
  const router = useRouter()
  const isMobile = useIsMobile()
  const { sessionData } = useCheckOutSession()

  if (!sessionData) return <LoadingPage />

  return (
    <Layout type={isMobile ? "mobile_dark" : "full"}>
      <FadeIn className="flex h-full flex-col pt-[60px] md:pt-0">
        <div>
          <Media
            type="image"
            link="/images/CheckOutSession/cancel.svg"
            blurLink="/images/CheckOutSession/cancel.png"
            containerClasses={`${
              isMobile
                ? "w-[100px] h-[100px] translate-x-[-20px]"
                : "w-[250px] h-[188.75px] translate-x-[-50px]"
            }`}
          />
          <p
            className="pb-[15px]
          font-urwgeometric_medium text-[34px] leading-[90%] text-gray_1
          md:text-[64px]"
          >
            <ClipSpan>Session</ClipSpan> canceled.
          </p>
          <p
            className="font-urwgeometric text-[12px] text-gray_1 samsungS8:text-[14px]
            md:text-[16px]"
          >
            {isMobile ? (
              <>You successfully canceled your Session.</>
            ) : (
              <>You successfully canceled your Session.</>
            )}
          </p>
        </div>
        <div
          className="flex grow
          flex-col justify-end gap-y-[10px]"
        >
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
            onClick={() => router.push(`/${sessionData.studioId}/booktype`)}
          >
            Back to the Studio
          </Button>
        </div>
      </FadeIn>
    </Layout>
  )
}

export default CancelSession
