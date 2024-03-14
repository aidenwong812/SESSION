import useIsMobile from "@/hooks/useIsMobile"
import PaymentSelector from "@/components/PaymentSelector/PaymentSelector"
import SingleStudio from "@/components/SingleStudio"
import PriceDetails from "../PriceDetails"
import CheckOutTitle from "../CheckOutTitle"
import RemainingAmount from "../RemainingAmount"
import StudioNotes from "../StudioNotes"
import CTAButtons from "../CTAButtons"

const CheckDetail = () => {
  const isMobile = useIsMobile()

  return (
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
          <CTAButtons />
        </div>
        <div className="col-span-2 mt-[20px] flex flex-col gap-y-[20px] md:col-span-1 md:mt-0 md:hidden">
          <PriceDetails />
        </div>
      </div>
    </div>
  )
}

export default CheckDetail
