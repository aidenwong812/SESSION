const CancellationPolicy = () => (
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
      Cancellation Policy
    </p>
    <div
      className="grid w-full grid-cols-12
              gap-y-[6px] pt-[10px]
              font-urwgeometric
              text-[14px] text-gray_1 md:pt-[9.6px] md:text-[8.4px]
              lg:pt-[12.8px] lg:text-[11.2px] xl:pt-[16px] xl:text-[14px]"
    >
      <p className="col-span-8">48 hours before your session</p>
      <p className="col-span-4 text-right">100% Refund</p>
      <p className="col-span-8">24 hours before your session</p>
      <p className="col-span-4 text-right">50% Refund</p>
    </div>
  </div>
)

export default CancellationPolicy
