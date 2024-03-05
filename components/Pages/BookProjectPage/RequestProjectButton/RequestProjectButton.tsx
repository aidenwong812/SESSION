import { useBookProject } from "@/providers/BookProjectProvider"
import Button from "@/shared/Button"
import Media from "@/shared/Media"

const RequestProjectButton = () => {
  const { request, loading } = useBookProject()

  return (
    <>
      <div
        className="flex h-[48px] w-full items-center justify-center rounded-[24px] bg-gray_overlay_6 md:h-[28.8px]
                md:w-[201px] md:rounded-[14.4px] lg:h-[38.4px]
                lg:w-[268px] lg:rounded-[19.2px] xl:h-[48px] xl:w-[335px] xl:rounded-[24px]"
      >
        <Media
          type="image"
          link="/images/Common/light-info.svg"
          blurLink="/images/Common/light-info.png"
          containerClasses="w-[25px] aspect-[25/24]"
        />
        <p className="font-urwgeometric text-[10px] text-gray_2 md:text-[7.2px] lg:text-[9.6px] xl:text-[12px]">
          Final price will be set by studio and sent to you for review
        </p>
      </div>
      <Button
        id="request-project"
        type="button"
        disabled={loading}
        className="mt-[20px] h-[48px] w-full border-x-[1px] border-b-[2px] border-x-[#A1EA04] border-b-[#A1EA04] font-urwgeometric_bold
                                text-black shadow-none
                                md:h-[28.8px] md:w-[201px]
                                md:text-[9.6px] md:shadow-[0px_0px_40px_0px_#a1ea0466]
                                lg:h-[38.4px] lg:w-[268px]
                                lg:text-[12.8px] xl:h-[48px]
                                xl:w-[335px] xl:text-[16px]"
        pulseColor="white"
        onClick={request}
      >
        Request Project
      </Button>
    </>
  )
}

export default RequestProjectButton
