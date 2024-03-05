import Media from "@/shared/Media"

const ExplainTimeSelect = () => (
  <div className="mt-[20px] flex w-full items-center justify-start rounded-full bg-gray_overlay_6 py-[10px] xs:justify-center">
    <Media
      type="image"
      link="/images/BookSession/light-info.svg"
      blurLink="/images/BookSessin/light-info.png"
      containerClasses="w-[25px] h-[24px]"
    />
    <p
      className="translate-x-[-5px] font-urwgeometric text-[12px] text-gray_2
    samsungS8:translate-x-[-4px] samsungS8:text-[14px] xs:translate-x-[0px]"
    >
      Choose a Start Time to see the available End Times.
    </p>
  </div>
)

export default ExplainTimeSelect
