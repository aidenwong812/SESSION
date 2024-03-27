import Image from "next/image"
import { useLayout } from "@/providers/LayoutProvider"
import ClipSpan from "../ClipSpan"

const SingleStudio = () => {
  const { studio } = useLayout()
  return (
    <div
      className="flex h-[140px] w-full
        overflow-hidden rounded-[24px] md:rounded-[19.2px] lg:rounded-[25.6px] xl:rounded-[34px]"
    >
      <div
        className="relative h-full w-[120px] border-r-[2px]
                border-r-[#A1EA04]
                bg-[url('/images/BookProject/lady-studio.png')] bg-cover
                bg-center md:w-[160px]"
      >
        <Image
          src={studio?.photo || "/images/BookProject/lady-studio.png"}
          alt=""
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div
        className="flex h-full
            grow flex-col justify-center bg-[url('/images/BookProject/lady-studio-opacity.png')]
            bg-cover
            bg-center p-[10px]
            backdrop-blur-[20px] md:p-[12px] lg:p-[16px] xl:p-[20px]"
      >
        <div
          className="absolute left-0 top-0 size-full grow
                bg-gradient-to-b from-[#d9d9d90f] from-10%
                to-[#d9d9d900] to-75%"
        />
        <p
          className="font-urwgeometric_bold text-[20px] leading-[100%] drop-shadow-xl
                drop-shadow-session md:text-[12px] lg:text-[16px] xl:text-[20px]"
        >
          <ClipSpan>Sound Studios</ClipSpan>
        </p>
        <p
          className="font-urwgeometric_bold text-gray_1 md:text-[8.4px] lg:text-[11.2px]
                xl:text-[14px]"
        >
          4 Rooms
        </p>
      </div>
    </div>
  )
}

export default SingleStudio
