import Media from "@/shared/Media"

const PaymentIcon = ({ ...rest }) => (
  <div
    className="flex aspect-[2/1] w-auto
        justify-center rounded-full bg-gray_overlay_6 px-[10px] py-[5px] md:w-[48px] md:p-0 lg:w-[64px]
        xl:w-[80px]"
  >
    <Media type="image" {...rest} imageClasses="!object-contain" />
  </div>
)

export default PaymentIcon
