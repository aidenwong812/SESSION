import useIsMobile from "@/hooks/useIsMobile"
import Media from "@/shared/Media"
import ClipSpan from "../../../ClipSpan"

const CheckOutTitle = () => {
  const isMobile = useIsMobile()

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-start gap-x-[5px] md:flex-row md:items-center">
        <Media
          type="image"
          link="/images/CheckOutProject/check.svg"
          blurLink="/images/CheckOutProject/check.png"
          containerClasses="w-[108px] aspect-[1/1]"
        />
        <p className="px-[20px] font-urwgeometric text-[30px] leading-[100%] text-gray_1 samsungS8:text-[34px] md:px-0 lg:text-[48px]">
          Your Project{" "}
          <ClipSpan className="bg-gradient-to-r from-[#FF6A2B] to-[#FF442B]">
            “The Color Violet”
          </ClipSpan>{" "}
          has been
          <br /> completed.
        </p>
      </div>
      <p className="px-[20px] pt-[10px] font-urwgeometric text-[14px] text-gray_1  samsungS8:text-[16px] md:pl-[30px] lg:text-[20px]">
        You made it! To finalize and receive the final files, {isMobile && <br />} pay the remaining
        amount.
      </p>
    </div>
  )
}

export default CheckOutTitle
