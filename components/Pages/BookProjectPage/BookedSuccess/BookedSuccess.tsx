import useIsMobile from "@/hooks/useIsMobile"
import FadeIn from "../../../FadeIn"
import BookedProject from "../BookedProject"
import Layout from "../../../Layout"

const BookedSuccess = () => {
  const isMobile = useIsMobile()

  return (
    <Layout type={isMobile ? "mobile" : "full"}>
      <FadeIn className="flex h-full flex-col pt-[40px]">
        <BookedProject />
      </FadeIn>
    </Layout>
  )
}

export default BookedSuccess
