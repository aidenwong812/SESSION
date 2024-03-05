import { motion } from "framer-motion"
import useModalAnimation from "@/hooks/useModalAnimation"

const AlertModal = ({ isOpenModal, toggleModal, children }) => {
  const { animate, initial } = useModalAnimation(isOpenModal)

  return (
    <div
      className={`!fixed left-0 top-0 z-40 flex h-screen
              w-screen items-end overflow-hidden bg-[#121211cc] shadow-[0px_12px_24px_0px_#0000003d] md:items-center
              md:justify-end
              ${isOpenModal ? "block" : "hidden"}`}
    >
      <motion.div
        className="flex h-[500px] w-full flex-col rounded-t-[20px]
              border-t-[2px] border-t-gray_overlay_6
              bg-black_0 px-[20px] py-[5vh]
              md:h-full md:w-[640px] md:rounded-t-[0px] md:border-none md:px-[36px] lg:px-[48px] xl:px-[60px]"
        animate={animate}
        initial={initial}
      >
        {(children as any)({
          toggleModal,
        })}
      </motion.div>
    </div>
  )
}

export default AlertModal
