import useIsMobile from "@/hooks/useIsMobile"
import { useCheckOutProject } from "@/providers/CheckOutProjectProvider"
import Button from "@/shared/Button"
import { STEPS } from "@/lib/consts/checkout"
import Layout from "../../../Layout"
import Container from "../../../Container"
import FadeIn from "../../../FadeIn"
import PriceDetails from "../PriceDetails"
import PaymentSelector from "../../../PaymentSelector/PaymentSelector"
import CheckOutTitle from "../CheckOutTitle"
import StudioNotes from "../../../StudioNotes"
import RemainingAmount from "../RemainingAmount"
import SingleStudio from "../../../SingleStudio"

const ProjectCheckOut = () => {
  const isMobile = useIsMobile()
  const { setCurStep } = useCheckOutProject()

  return (
    <Layout type={isMobile ? "mobile_transparent" : "base"}>
      <div className="size-full pt-[100px] md:pt-[0px]">
        <Container
          containerClassName={`${isMobile ? "!border-none h-[calc(100vh-110px)]" : ""}`}
          className="!bg-[#12121166]"
          contentClassName="!p-0 pt-[40px] md:!pt-[38.4px] lg:!pt-[51.2px]"
        >
          <FadeIn className="size-full">
            <div className="no-scrollbar flex size-full flex-col gap-y-[30px] overflow-y-scroll">
              <CheckOutTitle />
              <div
                className="grid w-full grow grid-cols-1  rounded-[24px] border-t-[2px] border-t-gray_overlay_3
                bg-black_0 px-[10px] py-[20px] samsungS8:px-[20px]
                md:grid-cols-2 md:gap-x-[24px] md:px-[30px] 
                md:py-[60px] lg:gap-x-[32px] xl:gap-x-[40px]"
              >
                <div className="col-span-2 flex flex-col gap-y-[20px] md:col-span-1">
                  <RemainingAmount />
                  {isMobile && (
                    <>
                      <SingleStudio />
                      <StudioNotes />
                    </>
                  )}
                  <PaymentSelector />
                </div>
                <div className="col-span-2 mt-[20px] hidden flex-col gap-y-[20px] md:col-span-1 md:mt-0 md:flex">
                  <SingleStudio />
                  <PriceDetails />
                  <StudioNotes />
                </div>
                <div className="col-span-2 flex flex-col justify-center gap-x-[10px] gap-y-[20px] pt-[20px] md:flex-row md:pt-[70px]">
                  <Button
                    id="book-project"
                    type="button"
                    className="h-[48px] w-full border-x-[1px] border-b-[2px] border-x-[#A1EA04] border-b-[#A1EA04] font-urwgeometric_bold text-black
                                              shadow-none md:h-[28.8px]
                                              md:w-[288px] md:text-[9.6px]
                                              md:shadow-[0px_0px_40px_0px_#a1ea0466] lg:h-[38.4px]
                                              lg:w-[384px] lg:text-[12.8px]
                                              xl:h-[48px] xl:w-[480px]
                                              xl:text-[16px]"
                    pulseColor="white"
                    onClick={() => setCurStep(STEPS.BOOKED_SUCCESS)}
                  >
                    Complete Project
                  </Button>
                </div>
                <div className="col-span-2 mt-[20px] flex flex-col gap-y-[20px] md:col-span-1 md:mt-0 md:hidden">
                  <PriceDetails />
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </div>
    </Layout>
  )
}

export default ProjectCheckOut
