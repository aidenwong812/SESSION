import { useBookSession } from "@/providers/BookSessionProvider"
import Input from "@/shared/Input"
import Media from "@/shared/Media"

const ComingPeople = () => {
  const { comingPeople, setComingPeople } = useBookSession()
  const handlePeopleCount = (e) => {
    if (Number.isNaN(Number(e.target.value))) {
      setComingPeople(1)
      return
    }

    if (Number(e.target.value) > 6) {
      setComingPeople(6)
      return
    }

    setComingPeople(e.target.value)
  }

  return (
    <div className="mt-[20px] w-full rounded-[24px] bg-gray_overlay_3 p-[20px] md:mt-0 md:bg-transparent md:px-0 md:py-[24px] lg:py-[32px] xl:py-[40px]">
      <p
        className="pb-[10px] font-urwgeometric_bold text-[20px]
            leading-[100%] text-gray_1 md:pb-[12px] md:text-[14.4px]
            lg:pb-[16px] lg:text-[19.2px] xl:pb-[20px] xl:text-[24px]"
      >
        How many people are
        <br />
        coming to the studio?{" "}
        <span
          className="pb-[10px] pt-[4px] font-urwgeometric text-[14px]
            leading-[100%] text-gray_2 md:pb-[12px] md:text-[7.2px] lg:pb-[16px]
            lg:text-[9.6px] xl:pb-[20px] xl:text-[12px]"
        >
          (Max. 6)
        </span>
      </p>
      <div className="relative size-full">
        <Input
          id="coming-people"
          value={comingPeople || ""}
          onChange={handlePeopleCount}
          containerClassName="w-full h-[48px]
                                border-l-[1px] border-l-gray_overlay_6
                                border-r-[1px] border-r-gray_overlay_6
                                border-b-[2px] border-b-gray_overlay_6
                                shadow-[12px_12px_32px_0px_#15151499,-12px_-12px_32px_0px_#40403b33]
                                backdrop-blur-[12px] px-[25px]
                                bg-gray_overlay_6"
          className="px-[30px]
                                font-urwgeometric
                                text-gray_2
                                outline-none placeholder:text-[14px]
                                placeholder:text-gray_2
                                focus:!border-none
                                focus:!ring-0"
        />
        <div
          className="absolute left-0 top-0 flex h-full
         w-fit items-center justify-between
         pb-[7px] pl-[10px] md:pl-[12px] lg:pl-[16px]
         xl:pl-[20px]"
        >
          <Media
            type="image"
            link="/images/BookSession/coming-people.svg"
            blurLink="/images/BookSession/coming-people.png"
            containerClasses="w-[29px] aspect-[29/27]"
          />
        </div>
        <div
          className="absolute right-0 top-0 z-[3] flex
                h-full w-fit items-center justify-between
                pr-[10px] md:pr-[12px] lg:pr-[16px] xl:pr-[20px]"
        >
          <div className="flex items-center gap-x-[8px]">
            <button
              type="button"
              className="flex aspect-[1/1] w-[30px] items-center justify-center rounded-full bg-black_0 md:w-[32px]"
              onClick={() => {
                setComingPeople(comingPeople - 1)
              }}
              disabled={comingPeople === 1}
            >
              <p
                className={`pb-[4px] text-[20px] leading-[100%] ${
                  comingPeople === 1
                    ? "cursor-not-allowed text-gray_2 opacity-[0.4]"
                    : "text-gray_1"
                }`}
              >
                -
              </p>
            </button>
            <button
              type="button"
              className="flex aspect-[1/1] w-[30px] items-center justify-center rounded-full bg-black_0 md:w-[32px]"
              onClick={() => setComingPeople(comingPeople + 1)}
              disabled={comingPeople === 6}
            >
              <p
                className={`pb-[4px] text-[20px] leading-[100%] ${
                  comingPeople === 6
                    ? "cursor-not-allowed text-gray_2 opacity-[0.4]"
                    : "text-gray_1"
                }`}
              >
                +
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComingPeople
