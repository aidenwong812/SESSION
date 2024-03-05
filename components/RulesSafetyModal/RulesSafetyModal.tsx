import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import useModalAnimation from "@/hooks/useModalAnimation"
import Media from "@/shared/Media"
import useScrollEnded from "@/hooks/useScrollEnded"

const RulesSafetyModal = ({ isOpenModal, toggleModal, children }) => {
  const { animate, initial } = useModalAnimation(isOpenModal)

  const containerRef = useRef()

  const { scrollY } = useScroll({ container: containerRef })

  const { isScrollEnded } = useScrollEnded({
    ref: containerRef,
    scrollY,
  })

  return (
    <div
      className={`!fixed left-0 top-0 z-[9999] flex h-screen
              w-screen items-end overflow-hidden bg-[#121211cc] shadow-[0px_12px_24px_0px_#0000003d] md:items-center
              md:justify-end
              ${isOpenModal ? "block" : "hidden"}`}
    >
      <motion.div
        className="flex h-[80%] w-full flex-col rounded-t-[20px] bg-black_0 px-[20px]
              py-[5vh] md:h-full md:w-[640px] md:rounded-t-[0px] md:px-[36px] lg:px-[48px] xl:px-[60px]"
        animate={animate}
        initial={initial}
        transition={{
          duration: 0.3,
        }}
      >
        <div className="flex items-center justify-between pb-[40px]">
          <p className="font-urwgeometric text-[36px] leading-[100%] text-gray_1 md:text-[48px]">
            Rules & Safety
          </p>
          <button
            type="button"
            className="flex aspect-[1/1]
                            w-[44px] items-center justify-center
                            self-end rounded-full border-x-[1px]
                            border-b-[2px] border-x-gray_overlay_6 border-b-gray_overlay_6 bg-gray_overlay_6 shadow-[12px_12px_32px_0px_#15151499,-12px_-12px_32px_0px_#40403b33]"
            onClick={toggleModal}
          >
            <Media
              type="image"
              link="/images/Common/close.svg"
              blurLink="/images/Common/close.png"
              containerClasses="w-[24px] md:w-[14.4px] lg:w-[19.2px] xl:w-[24px] aspect-[1/1]"
            />
          </button>
        </div>
        {!isScrollEnded && (
          <div
            className="pointer-events-none 
                fixed bottom-0 
                left-0 z-[20]
                h-[200px]
                w-full bg-gradient-to-b from-transparent
                to-black_0"
          />
        )}
        <div className="relative grow overflow-y-auto" ref={containerRef}>
          {children}
        </div>
      </motion.div>
    </div>
  )
}

export default RulesSafetyModal
