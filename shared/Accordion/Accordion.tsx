import { FC, ReactNode, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowDownIcon, ArrowUpIcon } from "../Icons"
import Media from "../Media"

interface IAccordion {
  className?: string
  tabClassName?: string
  contentClassname?: string
  title: ReactNode
  content: ReactNode
  tabNumber?: number
}

const Accordion: FC<IAccordion> = ({
  className,
  tabNumber,
  tabClassName,
  contentClassname,
  title,
  content,
}) => {
  const [isExpaned, setIsExpanded] = useState(false)
  return (
    <div
      className={`overflow-hidden
      rounded-[24px]
      bg-gray_overlay_6 p-[20px]
      ${className || ""} 
      transition duration-[300ms]`}
    >
      <button
        className={`
          flex 
          w-full items-center justify-between 
          ${tabClassName}`}
        type="button"
        onClick={() => setIsExpanded(!isExpaned)}
      >
        <div className="flex gap-x-[5px]">
          {tabNumber && <p>{tabNumber}.</p>}
          <p>{title}</p>
        </div>
        <div>
          {isExpaned ? (
            <Media type="image" link={ArrowUpIcon} containerClasses="w-[24px] aspect-[1/1]" />
          ) : (
            <Media type="image" link={ArrowDownIcon} containerClasses="w-[24px] aspect-[1/1]" />
          )}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isExpaned && (
          <motion.section
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
          >
            <div className={`${contentClassname || ""}`}>{content}</div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Accordion
