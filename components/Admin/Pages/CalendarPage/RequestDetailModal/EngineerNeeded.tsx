import Radiobox from "@/shared/Radiobox"

const EngineerNeed = ({ event }) => {
  const questionClasses = `flex items-center gap-x-[15px] p-[20px]
    cursor-pointer bg-gray_overlay_6 rounded-[24px]
    shadow-[0px_1.5px_0px_2px_#d2d2d208] border-x-[1px] border-b-[2px] border-gray_overlay_6`
  return (
    <div className="mt-[40px] w-full">
      <p
        className="pb-[10px] pl-[20px] font-urwgeometric
                text-[14px] leading-[100%] text-gray_1"
      >
        Does {event.bandName} need an engineer?
      </p>
      <div className={questionClasses}>
        <Radiobox checked={event.isEngineerNeeded} readOnly id="yes-want" />
        <p className="font-urwgeometric text-[12px] text-gray_1 samsungS8:text-[14px] md:text-[8.4px] lg:text-[11.2px] xl:text-[14px]">
          {event.isEngineerNeeded ? (
            <>
              <span className="text-[#A1EA04]">Yes.</span> The Artist/Band wants to get assistance
              from an engineer in the studio.
            </>
          ) : (
            <>
              No. The Artist/Band does not wants to get assistance from an engineer in the studio.
            </>
          )}
        </p>
      </div>
    </div>
  )
}

export default EngineerNeed
