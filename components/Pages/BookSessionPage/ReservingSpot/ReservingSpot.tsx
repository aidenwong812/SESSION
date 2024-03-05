import Media from "@/shared/Media"

const ReservingSpot = () => (
  <div
    className="h-[36px] w-full
            rounded-full !bg-gray_overlay_6
            bg-none font-urwgeometric_bold text-black
            shadow-[0px_12px_24px_0px_#0000003d]
            md:text-[9.6px] lg:text-[12.8px] xl:text-[16px]"
  >
    <div
      className="flex size-full items-center
                justify-center gap-x-[5px]"
    >
      <Media
        type="image"
        link="/images/BookSession/light-info.png"
        blurLink="/images/BookSession/light-info.png"
        containerClasses="w-[25px] aspect-[25/24]"
      />
      <p className="font-urwgeometric text-[12px] text-gray_2">
        We are reserving this spot for you for <span className="text-gray_1">14:52 minutes</span>
      </p>
    </div>
  </div>
)

export default ReservingSpot
