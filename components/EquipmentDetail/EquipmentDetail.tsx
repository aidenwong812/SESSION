import Accordion from "@/shared/Accordion"
import DetailContent from "./DetailContent"
import infoMapper from "./infoMapper.json"

const EquipmentDetail = ({ className = "", data }) => (
  <div
    className={`w-full
        rounded-[24px] bg-[#121211] p-[20px] md:rounded-[14.4px]
        md:bg-[#12121166] md:p-[12px] lg:rounded-[19.2px] lg:p-[16px]
        xl:rounded-[24px] xl:p-[20px] ${className}`}
  >
    <p
      className="pb-[20px]
        font-urwgeometric_bold text-[24px] text-gray_1 md:text-[14.4px]
        lg:text-[19.2px]
        xl:text-[24px]"
    >
      Room Equipment
    </p>
    <div
      className="flex flex-col 
            gap-y-[20px] md:gap-y-[12px] lg:gap-y-[16px] xl:gap-y-[20px]"
    >
      {data &&
        infoMapper.map((mapper, i) => (
          <Accordion
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            title={mapper.label}
            tabClassName="text-gray_1 font-urwgeometric_bold
                    md:text-[12px] lg:text-[16px] xl:text-[20px]"
            content={<DetailContent content={data[mapper.key]} />}
            contentClassname="pt-[15px]
              md:text-[9.6px] lg:text-[12.8px] xl:text-[16px]"
          />
        ))}
    </div>
  </div>
)

export default EquipmentDetail
