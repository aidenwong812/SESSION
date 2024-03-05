import { motion } from "framer-motion"
import CloseButton from "@/shared/DropDown/CloseButton"
import useIsMobile from "@/hooks/useIsMobile"
import useModalAnimation from "@/hooks/useModalAnimation"

const SideModal = ({
  isVisible,
  toggleModal,
  children,
  containerClasses = "",
  showCloseButton = true,
}) => {
  const { animate, initial } = useModalAnimation(isVisible)
  const isMobile = useIsMobile()
  return (
    <div
      className={`!fixed left-0 top-0 z-[100] flex h-screen
      w-screen items-end overflow-hidden bg-[#121211cc]
      shadow-[0px_12px_24px_0px_#0000003d] md:justify-end
      ${isVisible ? "block" : "hidden"}`}
    >
      <motion.div
        className={`flex h-[80%] w-full flex-col rounded-t-[24px]
        border-t-[2px] border-t-gray_overlay_6 bg-black_0
        md:h-full md:w-[600px] md:rounded-t-[0px] md:border-none ${containerClasses}`}
        animate={animate}
        initial={initial}
        transition={{ duration: 0.2 }}
      >
        <div
          className="flex min-h-[100%] flex-col gap-y-[20px] p-[20px]
          md:gap-y-[19.2px] md:px-[36px] md:py-[5vh] lg:gap-y-[25.6px]
          lg:px-[48px] xl:gap-y-[32px] xl:px-[60px]"
        >
          {!isMobile && showCloseButton && <CloseButton onClick={toggleModal} />}
          <div className="grow">{children}</div>
          {isMobile && showCloseButton && <CloseButton onClick={toggleModal} />}
        </div>
      </motion.div>
    </div>
  )
}

export default SideModal
