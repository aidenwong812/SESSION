/* eslint-disable */
import Radiobox from "@/shared/Radiobox"

const CheckCard = ({ children, id, onClick = () => {}, checked }) => {
  return (
    <div
      className={`flex items-center gap-x-[10px] md:gap-x-[15px]
      p-[10px] md:p-[12px] lg:p-[16px] xl:p-[20px]
      cursor-pointer bg-gray_overlay_3 
      rounded-[24px] md:rounded-[14.4px] lg:rounded-[19.2px] xl:rounded-[24px]
      shadow-[0px_1.5px_0px_2px_#d2d2d208]
      ${
        checked
          ? "border border-[#A1EA04]"
          : "border-r-gray_overlay_6 border-r-[1px] border-l-gray_overlay_6 border-l-[1px] bg-gray_overlay_6 border-b-[2px] border-b-gray_overlay_6"
      }`}
      onClick={onClick}
    >
      <Radiobox id={id} checked={checked} readOnly />
      {children}
    </div>
  )
}

export default CheckCard
