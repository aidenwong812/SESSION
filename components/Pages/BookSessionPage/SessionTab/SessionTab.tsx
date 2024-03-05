import Media from "@/shared/Media"

const SessionTab = () => (
  <div
    className="relative top-[10px] aspect-[160/45] w-[160px] cursor-pointer overflow-hidden 
    rounded-full px-[1.5px]
    pb-[2.5px] pt-[1px] md:aspect-[335/56]
    md:w-[201px] lg:w-[268px]
    xl:w-[335px]"
  >
    <div
      className="absolute
            left-0 top-0 z-[2]
            h-[250%] w-[100%] translate-y-[-40px]
            rotate-[3deg]
            bg-gradient-to-r from-transparent from-5% via-[#DAEB02]
            via-20% to-transparent to-90%"
    />
    <div
      className="absolute
            left-0 top-0 z-[3]
            h-[250%] w-[100%] translate-y-[-40px]
            rotate-[3deg]
            bg-gradient-to-r from-[#121211] from-30%
            via-40%
            to-transparent to-100% opacity-[0.5]"
    />
    <div
      className="relative z-[4] flex
            size-full items-center justify-center
            rounded-full
            bg-gradient-to-r from-[#2525278c] via-[#2525278c]
            to-[#2525278c]
            backdrop-blur-[6px]"
    >
      <Media
        type="image"
        link="/images/BookSession/symbol.svg"
        blurLink="/images/BookSession/symbol.png"
        containerClasses="w-[30px] md:w-[20.4px] lg:w-[27.2px] xl:w-[34px]
        aspect-[1/1]"
      />
      <p
        className="font-urwgeometric_bold text-[20px]
        text-gray_1 md:text-[14.4px] lg:text-[19.6px] xl:text-[24px]"
      >
        Session
      </p>
    </div>
  </div>
)

export default SessionTab
