import { useFormContext } from "react-hook-form"
import { useBookProject } from "@/providers/BookProjectProvider"
import Media from "@/shared/Media"

const EndIcon = ({ num }) => {
  const { setLinks, links } = useBookProject()
  const formContext = useFormContext()

  const onDeleteLink = () => {
    if (links.length === 1) return
    formContext.reset()
    const temp = [...links.slice(0, num), ...links.slice(num + 1, links.length)]

    setLinks(temp)
  }

  return (
    <button
      type="button"
      className="flex aspect-[1/1] w-[24px] items-center justify-center
            overflow-hidden rounded-full
            bg-gray_overlay_6 shadow-[12px_12px_32px_0px_#15151499,-12px_-12px_32px_0px_#40403b33]"
      onClick={onDeleteLink}
    >
      <Media
        type="image"
        link="/images/BookProject/remove.svg"
        blurLink="/images/BookProject/remove.png"
        containerClasses="w-[14px] aspect-[1/1]"
      />
    </button>
  )
}

export default EndIcon
