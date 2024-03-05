import { useAuth } from "@/providers/AuthProvider"
import Media from "@/shared/Media"

const TwitterButton = () => {
  const { twitterSign } = useAuth()

  return (
    <button
      className="flex aspect-[1/1]
              w-[59px] items-center justify-center rounded-full
              border-x-[1px] border-b-[2px] border-x-gray_overlay_6
              border-b-gray_overlay_6 bg-gray_overlay_6
              shadow-[13.5px_13.5px_36px_0px_#15151499,-13.5px_-13.5px_36px_0px_#40403b33] samsungS8:w-[66.46px]
              xs:w-[72px]"
      type="button"
      onClick={twitterSign}
    >
      <Media
        type="image"
        link="/images/Social/twitter.svg"
        blurLink="/images/Social/twitter.png"
        containerClasses="w-[28px] h-[28px]"
      />
    </button>
  )
}

export default TwitterButton
