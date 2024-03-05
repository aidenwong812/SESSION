import useIsMobile from "@/hooks/useIsMobile"
import Container from "../../../Container"
import Layout from "../../../Layout"
import StudioList from "./StudioList"

const CalendarToStudioPage = () => {
  const isMobile = useIsMobile()
  return (
    <Layout type={isMobile ? "mobile_dark" : "base"}>
      {isMobile && (
        <div
          className="absolute left-0 top-[140px] 
          h-[40px] w-screen border-t-[2px]
          border-t-[#d2d2d21f] bg-gradient-to-b from-[#121211cc] to-[#12121100]"
        />
      )}
      <div className="size-full pt-[90px] md:px-[33px] lg:px-[44px] xl:px-[55px]">
        <Container
          containerClassName={`${isMobile ? "!border-none h-full" : ""}`}
          className={`${isMobile && "hidden"} bg-[#121211ee]`}
        >
          <StudioList />
        </Container>
      </div>
    </Layout>
  )
}

export default CalendarToStudioPage
