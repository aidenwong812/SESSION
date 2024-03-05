import useIsMobile from "@/hooks/useIsMobile"
import Layout from "../../Layout"
import BookProject from "./BookProject"
import BookSession from "./BookSession"
import Container from "../../Container"
import FadeIn from "../../FadeIn"

const BookTypePage = () => {
  const isMobile = useIsMobile()

  return (
    <Layout type={isMobile ? "mobile_dark" : "base"}>
      <FadeIn className="size-full md:flex md:items-center md:px-[33px] lg:px-[44px] xl:px-[55px]">
        <Container
          containerClassName={`${
            isMobile ? "!border-none !h-full !pt-[50px] samsungS8:!pt-[90px]" : ""
          }`}
          className={`${isMobile ? "hidden" : ""}`}
        >
          <p
            className="w-full 
            py-[10px] text-left font-urwgeometric
            text-[36px] text-gray_1 md:py-0 md:text-[24px] lg:text-[32px]"
          >
            Choose Booking
          </p>
          <div
            className="flex w-full grow flex-col justify-center gap-x-[30px] gap-y-[10px] samsungS8:gap-y-[20px]
            md:grid md:grid-cols-2
            md:pt-[18.75px] lg:pt-[25px]"
          >
            <BookSession />
            <BookProject />
          </div>
        </Container>
      </FadeIn>
    </Layout>
  )
}

export default BookTypePage
