import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Media from "@/shared/Media"
import { useProjectRequest } from "@/providers/ProjectRequestProvider"
import ClipSpan from "@/components/ClipSpan"

const Links = () => {
  const [isOpenStudioMenu, setIsOpenStudioMenu] = useState(true)
  const { selectedRequest } = useProjectRequest()

  return (
    <div className="mt-[40px] !rounded-[24px] bg-gray_overlay_3 !p-[20px]">
      <button
        type="button"
        className="flex w-full items-center justify-between"
        onClick={() => setIsOpenStudioMenu(!isOpenStudioMenu)}
      >
        <div className="flex items-center gap-x-[8px] text-[24px] text-gray_1">Links</div>
        <Media
          type="image"
          link={isOpenStudioMenu ? "/images/Admin/arrow-down.svg" : "/images/Admin/arrow-up.svg"}
          blurLink={
            isOpenStudioMenu ? "/images/Admin/arrow-down.png" : "/images/Admin/arrow-up.png"
          }
          containerClasses="w-[24px] h-[24px]"
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpenStudioMenu && (
          <motion.div
            className="flex w-full flex-col overflow-hidden"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: "auto" },
              collapsed: { height: 0 },
            }}
            transition={{
              duration: 0.1,
            }}
          >
            {selectedRequest.links.map((link, index) => (
              <div
                key={link}
                className="mt-[20px] flex w-full items-center justify-between
                !rounded-[24px] !border-x-[1px]
                !border-b-[2px] !border-gray_overlay_6 bg-gray_overlay_6 !p-[8px] !pl-[20px]"
              >
                <div className="flex items-center">
                  <ClipSpan className="py-0 font-urwgeometric text-[18px] font-bold leading-[18px]">
                    {index + 1}
                  </ClipSpan>
                  <p className="pl-[14px] font-urwgeometric text-[14px] leading-[14px] text-gray_1 underline">
                    {link}
                  </p>
                </div>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  type="button"
                  className="flex size-[32px] items-center justify-center rounded-full
          border-x-[1px] border-b-[2px] border-gray_overlay_6 bg-gradient_s_1"
                >
                  <Media
                    type="image"
                    link="/images/Admin/external-link.svg"
                    blurLink="/images/Admin/external-link.png"
                    containerClasses="w-[18px] h-[18px]"
                  />
                </a>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Links
