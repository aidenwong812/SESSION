import useIsMobile from "@/hooks/useIsMobile"
import Media from "@/shared/Media"

const StudioOffer = () => {
  const isMobile = useIsMobile()

  return (
    <div
      className="flex flex-col
          rounded-[24px] bg-gradient-to-b
          from-[#a1ea0400] via-[#a1ea0405] via-75% to-[#a1ea041a]  p-[20px]
          md:gap-y-[12px] md:rounded-[14.4px] md:p-[12px] lg:gap-y-[16px] lg:rounded-[19.2px]
          lg:p-[16px] xl:gap-y-[20px] xl:rounded-[24px] xl:p-[20px]"
    >
      <p className="font-urwgeometric_medium text-[24px] text-gray_1 md:text-[16.8px] lg:text-[22.4px] xl:text-[28px]">
        Studio Offer
      </p>
      <p
        className="py-[20px] font-urwgeometric_medium text-[64px] leading-[100%] text-[#a1ea04] drop-shadow-xl 
      drop-shadow-session md:py-0 md:text-[40px] lg:text-[50px] xl:text-[64px]"
      >
        $1,130.00
      </p>
      <div
        className="my-[5px] flex w-full items-center rounded-full 
        bg-gray_overlay_6 md:pl-[10.8px] lg:pl-[14.4px] xl:pl-[18px]"
      >
        <Media
          type="image"
          link="/images/Common/light-info.svg"
          blurLink="/images/Common/light-info.png"
          containerClasses="w-[32px] aspect-[1/1]"
        />
        <p className="py-[10px] font-urwgeometric text-[14px] text-gray_1 md:text-[8.4px] lg:text-[11.2px] xl:text-[14px]">
          {isMobile ? (
            <>
              This is the calculated price set by the
              <br />
              studio. It reflects the price of the room
              <br />
              and your specific recording
              <br />
              requirements.
            </>
          ) : (
            <>
              This is the calculated price set by the studio. It reflects the price of the
              <br />
              room and your specific recording requirements.
            </>
          )}
        </p>
      </div>
    </div>
  )
}

export default StudioOffer
