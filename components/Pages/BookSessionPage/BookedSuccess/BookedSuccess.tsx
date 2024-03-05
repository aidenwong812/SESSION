import useIsMobile from "@/hooks/useIsMobile"
import FadeIn from "../../../FadeIn"
import Layout from "../../../Layout"
import BookedSession from "../BookedSession"

const BookedSuccess = () => {
  const isMobile = useIsMobile()

  return (
    <Layout type={isMobile ? "mobile_dark" : "full"}>
      <FadeIn
        className="flex h-full flex-col pt-[80px]
            samsungS8:pt-[90px] md:pt-[50px]"
      >
        <BookedSession />
      </FadeIn>
    </Layout>
  )
}

export default BookedSuccess
