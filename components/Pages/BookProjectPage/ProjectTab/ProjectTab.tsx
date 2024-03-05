import Media from "@/shared/Media"

const ProjectTab = () => (
  <div
    className="relative top-[10px] aspect-[160/45] w-[160px] cursor-pointer overflow-hidden
    rounded-full px-[1px]
    pb-[2px] pt-[1px] md:aspect-[335/56]
    md:w-[201px] lg:w-[268px]
    xl:w-[335px]"
  >
    <div
      className="absolute
            left-0 top-0 z-[1]
            h-[250%] w-[100%] translate-y-[-40px]
            rotate-[3deg]
            bg-gradient-to-r
            from-[#ff6a2b3d] from-10% via-[#FF6A2B]
            via-30%
            to-[#ff6a2b3d] opacity-[0.6]"
    />
    <div
      className="absolute
            left-0 top-0 z-[3]
            h-[250%] w-[100%] translate-y-[-40px]
            rotate-[3deg]
            bg-gradient-to-r from-[#121211] from-30%
            via-40% to-transparent opacity-[0.5]"
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
        link="/images/BookSession/star.svg"
        blurLink="/images/BookSession/star.png"
        containerClasses="w-[30px] md:w-[26.4px] lg:w-[35.2px] xl:w-[44px]
        aspect-[1/1]"
      />
      <p
        className="font-urwgeometric_bold text-[20px] 
        leading-[100%] text-gray_1 md:text-[14.4px] lg:text-[19.2px] xl:text-[24px]"
      >
        Project
      </p>
    </div>
  </div>
)

export default ProjectTab
