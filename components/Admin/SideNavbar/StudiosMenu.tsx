import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from "next/router"
import { useSideMenu } from "../../../providers/SideMenuProvider"
import Media from "../../../shared/Media"
import MenuItemActive from "./MenuItemActive"

const StudiosMenu = () => {
  const {
    navContainerClasses,
    navActiveContainerClasses,
    iconClasses,
    iconActiveClasses,
    navClasses,
    studioActive,
    studioInfoActive,
  } = useSideMenu()
  const { push } = useRouter()

  const [isOpenStudioMenu, setIsOpenStudioMenu] = useState(false)

  useEffect(() => {
    if (studioActive) setIsOpenStudioMenu(studioActive)
  }, [studioActive])

  return (
    <>
      <button
        type="button"
        className={`${
          studioActive ? navActiveContainerClasses : navContainerClasses
        } flex justify-between`}
        onClick={() => setIsOpenStudioMenu(!isOpenStudioMenu)}
      >
        <div className="flex items-center gap-x-[8px]">
          <div className={studioActive ? iconActiveClasses : iconClasses}>
            <Media
              type="image"
              link={
                studioActive ? "/images/Admin/my-studio-active.svg" : "/images/Admin/my-studio.svg"
              }
              blurLink={
                studioActive ? "/images/Admin/my-studio-active.png" : "/images/Admin/my-studio.png"
              }
              containerClasses="w-[20px] h-[20px]"
            />
          </div>
          <p className={navClasses}>My Studio</p>
          {studioActive && <MenuItemActive />}
        </div>
        <Media
          type="image"
          link={isOpenStudioMenu ? "/images/Admin/arrow-down.svg" : "/images/Admin/arrow-up.svg"}
          blurLink={
            isOpenStudioMenu ? "/images/Admin/arrow-down.png" : "/images/Admin/arrow-up.png"
          }
          containerClasses="w-[16px] h-[16px]"
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
            <button
              type="button"
              className="relative py-[12px] pl-[58px] text-left font-urwgeometric text-[12px] leading-[14px] text-gray_2"
              onClick={() => push("/studio-info")}
            >
              Studio Information
              {studioInfoActive && <MenuItemActive />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default StudiosMenu
