import Image from "next/image"

const ProjectHeaderButton = ({ projectName }) => (
  <button
    type="button"
    className="flex aspect-[210/40] items-center justify-center !gap-0 rounded-full
        border-2 border-[#ff6a2b] bg-gray_overlay_6
        bg-gradient-to-r from-[#FF462A00] via-[#ff462a2f] to-[#FF462A00] pl-2
        pr-4 font-urwgeometric_semibold text-[14px] !text-project shadow-[0px_12px_24px_0px_#0000003d] backdrop-blur-[20px]"
  >
    <Image src="/images/BookType/project.svg" alt="" width={40} height={40} />
    <p>{projectName}</p>
  </button>
)

export default ProjectHeaderButton
