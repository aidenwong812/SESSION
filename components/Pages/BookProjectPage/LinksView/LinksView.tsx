import { useBookProject } from "@/providers/BookProjectProvider"

const LinksView = () => {
  const { links } = useBookProject()

  return (
    <div className="flex flex-col md:gap-y-[6px] lg:gap-y-[8px] xl:gap-y-[10px]">
      {links.map((link, i) => (
        <div
          className="flex h-[40px]
          items-center rounded-[24px] border-x-[1px]
          border-b-[2px] border-x-gray_overlay_6
          border-b-gray_overlay_6 bg-gray_overlay_6 px-[20px] md:h-[28.8px] md:px-[18px] lg:h-[38.4px]
          lg:px-[24px] xl:h-[48px] xl:px-[30px]"
          // eslint-disable-next-line react/no-array-index-key
          key={i}
        >
          <div className="flex flex-col gap-y-[10px] md:gap-y-[6px] lg:gap-y-[8px] xl:gap-y-[10px]">
            <div className="flex grow items-center gap-x-[10px] md:gap-x-[6px] lg:gap-x-[8px] xl:gap-x-[10px]">
              <p className="font-urwgeometric_bold text-[14px] text-[#a1ea04] md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]">
                {i + 1}
              </p>
              <div className="grow font-urwgeometric text-[14px] text-gray_1 md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]">
                {link}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LinksView
