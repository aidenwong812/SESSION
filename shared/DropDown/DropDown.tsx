import { motion } from "framer-motion"
import Button from "@/shared/Button"
import useIsMobile from "@/hooks/useIsMobile"
import useModalAnimation from "@/hooks/useModalAnimation"
import MultipleList from "./MultipleList"
import SingleList from "./SingleList"
import CloseButton from "./CloseButton"

const DropDown = ({
  title,
  isVisibleDropDown,
  toggleDropDown,
  options,
  value,
  onChange,
  multiple,
  label,
}) => {
  const { animate, initial } = useModalAnimation(isVisibleDropDown)
  const isMobile = useIsMobile()
  return (
    <div
      className={`!fixed left-0 top-0 z-40 flex h-screen
      w-screen items-end overflow-hidden bg-[#121211cc]
      shadow-[0px_12px_24px_0px_#0000003d] md:justify-end
      ${isVisibleDropDown ? "block" : "hidden"}`}
    >
      <motion.div
        className="flex h-[80%] w-full flex-col rounded-t-[24px]
        border-t-[2px] border-t-gray_overlay_6 bg-black_0
        md:h-full md:w-[640px] md:rounded-t-[0px] md:border-none"
        animate={animate}
        initial={initial}
        transition={{ duration: 0.2 }}
      >
        <div
          className="flex flex-row items-center justify-between
          gap-y-[20px] p-[20px] md:flex-col md:items-start md:gap-y-[19.2px] md:px-[36px] md:py-[5vh] lg:gap-y-[25.6px]
          lg:px-[48px] xl:gap-y-[32px] xl:px-[60px]"
        >
          {!isMobile && <CloseButton onClick={toggleDropDown} />}
          <p
            className="font-urwgeometric text-[24px] capitalize text-gray_1 md:text-[28.8px]
            lg:text-[38.4px] xl:text-[48px]"
          >
            {title}
          </p>
          {isMobile && <CloseButton onClick={toggleDropDown} />}
        </div>
        {multiple ? (
          <MultipleList onChange={onChange} value={value} options={options} label={label} />
        ) : (
          <SingleList onChange={onChange} value={value} options={options} />
        )}
        <div
          className="p-[20px] md:px-[36px] md:py-[5vh]
          lg:px-[48px] xl:px-[60px]"
        >
          {isVisibleDropDown && (
            <Button
              id="select-confirm"
              type="button"
              className="h-[48px] w-full
              rounded-full bg-gray_overlay_6
              font-urwgeometric_bold text-[16px]
              !text-black
              shadow-[0px_12px_24px_0px_#0000003d] backdrop-blur-[20px]"
              pulseColor="white"
              onClick={toggleDropDown}
            >
              Confirm
            </Button>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default DropDown
