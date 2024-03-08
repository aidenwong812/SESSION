import useIsMobile from "@/hooks/useIsMobile"
import { useCheckOutSession } from "@/providers/CheckOutSessionProvider"
import PriceDetails from "../PriceDetails"
import ExplainRulesSafety from "../../../ExplainRulesSafety"
import CancellationPolicy from "../../../CancellationPolicy"
import PaymentSelector from "../../../PaymentSelector/PaymentSelector"
import StudioLocation from "../../../StudioLocation"
import EquipmentDetail from "../../../EquipmentDetail"
import CheckOutTitle from "../CheckOutTitle"
import StudioOffer from "../StudioOffer"
import BookedStudio from "../BookedStudio"
import CTAButtons from "../CTAButtons"
import StudioNotes from "../StudioNotes"

const CheckDetail = () => {
  const isMobile = useIsMobile()

  const { sessionData } = useCheckOutSession()

  return (
    <div
      className="no-scrollbar flex size-full flex-col gap-y-[20px] overflow-y-scroll 
            !pb-[70px] md:gap-y-[0px] md:!pb-0"
    >
      <CheckOutTitle />
      <div
        className="grid w-full grow grid-cols-1  rounded-[24px] border-t-[2px] border-t-gray_overlay_3
                bg-black_0 px-[10px] py-[20px] samsungS8:px-[20px] md:grid-cols-2 md:gap-x-[24px]
                md:px-[30px] md:pb-[14.4px] md:pt-[36px]
                lg:gap-x-[32px] lg:pb-[19.2px] lg:pt-[48px]
                xl:gap-x-[40px] xl:pb-[24px] xl:pt-[60px]"
      >
        <div className="col-span-2 flex flex-col gap-y-[20px] md:col-span-1">
          <StudioOffer />
          {isMobile && <BookedStudio />}
          <StudioNotes />
          <PaymentSelector />
        </div>
        <div className="col-span-2 mt-[20px] hidden flex-col gap-y-[20px] md:col-span-1 md:mt-0 md:flex">
          <BookedStudio />
          <PriceDetails />
          <ExplainRulesSafety className="!bg-[#12121166]" />
          <CancellationPolicy />
        </div>
        <div
          className="col-span-2 flex flex-col 
                    justify-center gap-y-[10px] pt-[20px] md:flex-row md:gap-x-[14.4px] 
                    md:gap-y-[12px] md:pt-[70px] lg:gap-x-[24px] lg:gap-y-[16px] xl:gap-y-[20px]"
        >
          <CTAButtons />
        </div>
        <div className="col-span-2 mt-[20px] flex flex-col gap-y-[20px] md:col-span-1 md:mt-0 md:hidden">
          <PriceDetails />
          <ExplainRulesSafety className="!bg-[#12121166]" />
          <CancellationPolicy />
        </div>
        <div className="col-span-2 flex flex-col gap-y-[20px]">
          <StudioLocation />
          <EquipmentDetail data={sessionData?.studio} />
        </div>
      </div>
    </div>
  )
}

export default CheckDetail
