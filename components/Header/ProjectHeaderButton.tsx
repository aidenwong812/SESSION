import Image from "next/image"

const ProjectHeaderButton = ({ projectName }) => (
  <button
    type="button"
    className="flex aspect-[210/40] items-center justify-center !gap-0 rounded-full
        border-[1px] border-b-[2px] border-[#ff6a2b] bg-gray_overlay_6
        bg-gradient-to-r from-[#FF6A2B33] to-[#FF442B33] pl-1
        pr-4 font-urwgeometric_semibold text-[16px] !text-project shadow-[0px_12px_24px_0px_#0000003d] backdrop-blur-[20px]"
  >
    <Image src="/images/BookType/project.svg" alt="" width={40} height={40} />
    <p className="font-bold">{projectName}</p>
  </button>
)

export default ProjectHeaderButton
