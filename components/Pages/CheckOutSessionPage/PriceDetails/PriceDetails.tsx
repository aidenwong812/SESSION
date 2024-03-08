import { useCheckOutSession } from "@/providers/CheckOutSessionProvider"

const PriceDetails = () => {
  const { sessionData } = useCheckOutSession()

  return (
    <div
      className="rounded-[24px]
            bg-[#12121166] p-[20px] md:rounded-[14.4px] md:p-[19.2px]
            lg:rounded-[16px] lg:p-[25.6px] xl:rounded-[24px] xl:p-[32px]"
    >
      <p
        className="font-urwgeometric_bold
                text-[24px] 
                text-gray_1 md:text-[14.4px] lg:text-[19.2px] xl:text-[24px]"
      >
        Price Details
      </p>
      <div
        className="grid w-full grid-cols-2
                gap-y-[6px] pt-[10px]
                font-urwgeometric
                text-[14px] text-gray_1 md:pt-[9.6px] md:text-[8.4px]
                lg:pt-[12.8px] lg:text-[11.2px] xl:pt-[16px] xl:text-[14px]"
      >
        <p>{sessionData.studio.name} – 4 Hours</p>
        <p className="text-right">{`$${sessionData.studio.initPrice}`}</p>
        <p>Engineer Fee</p>
        <p className="text-right">{`$${sessionData.engineerPrice}`}</p>
        <p>Session Fee</p>
        <p className="text-right">{`$${sessionData.sessionPrice}`}</p>
      </div>
      <div className="my-[6px] h-[2px] w-full bg-gray_overlay_6" />
      <div
        className="flex justify-between
                 font-urwgeometric_bold text-[14px]
                 text-gray_1 md:text-[8.4px] lg:text-[11.2px] xl:text-[14px]"
      >
        <p>Total Price Estimate (USD)</p>
        <p>{`$${
          sessionData.studio.initPrice + sessionData.engineerPrice + sessionData.sessionPrice
        }`}</p>
      </div>
    </div>
  )
}

export default PriceDetails
