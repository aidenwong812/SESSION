import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useRouter } from "next/router"
import { useSideMenu } from "@/providers/SideMenuProvider"
import Media from "@/shared/Media"
import MenuItemActive from "./MenuItemActive"

const RequestsMenu = () => {
  const {
    navContainerClasses,
    iconClasses,
    navClasses,
    navActiveContainerClasses,
    requestActive,
    iconActiveClasses,
    sessionRequestsActive,
    projectRequestsActive,
  } = useSideMenu()
  const { push } = useRouter()
  const [isOpenRequestsMenu, setIsOpenRequestsMenu] = useState(false)

  useEffect(() => {
    if (requestActive) setIsOpenRequestsMenu(requestActive)
  }, [requestActive])

  return (
    <>
      <button
        type="button"
        className={`${
          requestActive ? navActiveContainerClasses : navContainerClasses
        } flex justify-between`}
        onClick={() => setIsOpenRequestsMenu(!isOpenRequestsMenu)}
      >
        <div className="flex items-center gap-x-2">
          <div className={requestActive ? iconActiveClasses : iconClasses}>
            <Media
              type="image"
              link={
                requestActive ? "/images/Admin/request-active.svg" : "/images/Admin/request.svg"
              }
              blurLink={
                requestActive ? "/images/Admin/request-active.png" : "/images/Admin/request.png"
              }
              containerClasses={requestActive ? "w-8 h-8" : "w-5 h-5"}
            />
          </div>
          <p className={navClasses}>Requests</p>
          {requestActive && <MenuItemActive />}
        </div>
        <Media
          type="image"
          link={isOpenRequestsMenu ? "/images/Admin/arrow-down.svg" : "/images/Admin/arrow-up.svg"}
          blurLink={
            isOpenRequestsMenu ? "/images/Admin/arrow-down.png" : "/images/Admin/arrow-up.png"
          }
          containerClasses="w-4 h-4"
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpenRequestsMenu && (
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
              className="relative w-full py-3 pl-14 text-left font-urwgeometric text-xs leading-none text-gray_2"
              onClick={() => push("/session-requests")}
            >
              <div className="relative w-fit">
                Sessions
                <div className="absolute -right-2.5 top-0 size-1 rounded-full bg-gradient_s_1 shadow-[0px_0px_10px_0px_#a1ea04]" />
              </div>
              {sessionRequestsActive && <MenuItemActive />}
            </button>
            <button
              type="button"
              className="relative w-full py-3 pl-14 text-left font-urwgeometric  text-xs leading-none text-gray_2"
              onClick={() => push("/project-requests")}
            >
              <div className="relative w-fit">
                Projects
                <div className="absolute -right-2.5 top-0 size-1 rounded-full bg-gradient_p_1 shadow-[0px_0px_10px_0px_#ff6a2b]" />
              </div>
              {projectRequestsActive && <MenuItemActive />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default RequestsMenu
