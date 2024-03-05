import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import useIsMobile from "@/hooks/useIsMobile"
import Media from "@/shared/Media"
import RulesSafetyModal from "../RulesSafetyModal"
import RulesSafety from "../RulesSafety"

const ExplainRulesSafety = ({ className = "" }) => {
  const [isOpenRulesSafety, setIsOpenRulesSafetyModal] = useState(false)
  const isMobile = useIsMobile()

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        className={`w-full overflow-hidden rounded-[24px] bg-[#12121166] p-[20px] md:rounded-[14.4px] lg:rounded-[19.2px]
        xl:rounded-[24px] ${className}`}
        onClick={() => {
          setIsOpenRulesSafetyModal(!isOpenRulesSafety)
        }}
      >
        <div className="flex w-full items-center justify-between">
          <button
            type="button"
            className="flex w-full items-center justify-between 
            font-urwgeometric_bold text-gray_1 
            md:text-[14.4px] lg:text-[19.2px] xl:text-[24px]"
          >
            <div className="flex gap-x-[5px]">
              <p
                className="font-urwgeometric_bold text-[24px]
                text-gray_1 md:text-[14.4px] lg:text-[19.2px] xl:text-[24px]"
              >
                Rules & Safety
              </p>
            </div>
          </button>
          <Media
            type="image"
            link="/images/Common/arrow-right.svg"
            blurLink="/images/Common/arrow-right.png"
            containerClasses="w-[24px] aspect-[1/1]"
          />
        </div>
        <AnimatePresence initial={false}>
          <motion.section
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
          >
            <p className="pt-[15px] font-urwgeometric text-[14px] text-gray_1">
              Get familiar with the Studio Rules and some Safety Measurements that{" "}
              {!isMobile && <br />} ensure the ideal stay for you and the studio.
            </p>
          </motion.section>
        </AnimatePresence>
      </div>
      <RulesSafetyModal
        isOpenModal={isOpenRulesSafety}
        toggleModal={() => setIsOpenRulesSafetyModal(!isOpenRulesSafety)}
      >
        <RulesSafety />
      </RulesSafetyModal>
    </>
  )
}

export default ExplainRulesSafety
