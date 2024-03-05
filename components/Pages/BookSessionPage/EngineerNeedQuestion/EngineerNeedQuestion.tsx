import useIsMobile from "@/hooks/useIsMobile"
import { useBookSession } from "@/providers/BookSessionProvider"
import CheckCard from "../../../CheckCard"

const EngineerNeedQuestion = () => {
  const { isEngineerNeeded, setIsEngineerNeeded } = useBookSession()
  const isMobile = useIsMobile()

  return (
    <div
      className="mt-[20px] rounded-[24px] bg-gray_overlay_3
      p-[20px] md:mt-0 md:rounded-[14.4px] md:p-[12px]
      lg:rounded-[19.2px] lg:p-[16px] xl:rounded-[24px] xl:p-[20px]"
    >
      <p
        className="font-urwgeometric_bold text-[20px]
        text-gray_1 md:text-[14.4px] lg:text-[19.2px] xl:text-[24px]"
      >
        Do you need an Engineer?
      </p>
      <p
        className="font-urwgeometric text-[12px] text-gray_2 samsungS8:text-[13px] xs:text-[14px] 
        md:text-[8.4px] xl:text-[14px]"
      >
        {isMobile ? (
          <>
            An Engineer is your go-to expert for all your
            <br />
            recording needs. From equipment setup and
            <br />
            tracking, to sound quality and technical support, the
            <br />
            Engineer has got your back!
          </>
        ) : (
          <>
            An Engineer is your go-to expert for all your recording needs.
            <br />
            From equipment setup and tracking, to sound quality and
            <br />
            technical support, the Engineer has got your back!
          </>
        )}
      </p>
      <div
        className="flex flex-col gap-y-[10px] pt-[10px]
        md:gap-y-[12px] md:pt-[12px] lg:gap-y-[16px] lg:pt-[16px] xl:gap-y-[20px] xl:pt-[20px]"
      >
        <CheckCard
          checked={isEngineerNeeded}
          onClick={() => setIsEngineerNeeded(true)}
          id="yes-want"
        >
          <p className="font-urwgeometric text-[12px] text-gray_1 samsungS8:text-[14px] md:text-[8.4px] lg:text-[11.2px] xl:text-[14px]">
            <span className="text-[#A1EA04]">Yes.</span> I want to get assistance from an Engineer
            in the studio.
          </p>
        </CheckCard>
        <CheckCard
          checked={!isEngineerNeeded}
          onClick={() => setIsEngineerNeeded(false)}
          id="no-want"
        >
          <p className="font-urwgeometric text-[12px] text-gray_2 samsungS8:text-[14px] md:text-[8.4px] lg:text-[11.2px] xl:text-[14px]">
            <span className="text-gray_1">No.</span> I want to use the studio without any help from
            an Engineer.
          </p>
        </CheckCard>
      </div>
    </div>
  )
}

export default EngineerNeedQuestion
