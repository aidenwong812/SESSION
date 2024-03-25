const DetailContent = ({ content }) => (
  <div
    className="grid grid-cols-1 gap-y-[20px]
        md:grid-cols-2 md:gap-x-[24px] md:gap-y-[12px] 
        lg:gap-x-[32px] lg:gap-y-[16px] xl:gap-x-[40px] xl:gap-y-[20px]"
  >
    {content?.map((data, i) => (
      <div
        className="flex items-center 
                gap-x-[5px] font-urwgeometric
                text-gray_2"
        // eslint-disable-next-line react/no-array-index-key
        key={i}
      >
        <div className="aspect-[1/1] w-[6px] rounded-full bg-gray_2" />
        <p className="pt-[4px] text-[14px] samsungS8:text-[16px] xs:text-[20px]">{data}</p>
      </div>
    ))}
  </div>
)

export default DetailContent
