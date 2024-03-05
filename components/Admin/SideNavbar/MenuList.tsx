import { useRouter } from "next/router"
import Media from "@/shared/Media"
import { useSideMenu } from "../../../providers/SideMenuProvider"
import RequestsMenu from "./RequestsMenu"
import StudiosMenu from "./StudiosMenu"
import MenuItemActive from "./MenuItemActive"

const MenuList = () => {
  const { push } = useRouter()

  const {
    navActiveContainerClasses,
    iconActiveClasses,
    iconClasses,
    navContainerClasses,
    navClasses,
    dashboardActive,
    calendarActive,
    activeProjectsActive,
  } = useSideMenu()

  return (
    <div className="relative z-[4] w-full">
      <button
        type="button"
        className={dashboardActive ? navActiveContainerClasses : navContainerClasses}
        onClick={() => push("/dashboard")}
      >
        <div className={dashboardActive ? iconActiveClasses : iconClasses}>
          <Media
            type="image"
            link={
              dashboardActive ? "/images/Admin/dashboard-active.svg" : "/images/Admin/dashboard.svg"
            }
            blurLink={
              dashboardActive ? "/images/Admin/dashboard-active.png" : "/images/Admin/dashboard.png"
            }
            containerClasses={dashboardActive ? "w-[32px] h-[30px]" : "w-[20px] h-[20px]"}
          />
        </div>
        <p className={navClasses}>Dashboard</p>
        {dashboardActive && <MenuItemActive />}
      </button>
      <button type="button" className={navContainerClasses} onClick={() => push("/calendar")}>
        <div className={iconClasses}>
          <Media
            type="image"
            link={
              calendarActive ? "/images/Admin/calendar-active.svg" : "/images/Admin/calendar.svg"
            }
            blurLink={
              calendarActive ? "/images/Admin/calendar-active.png" : "/images/Admin/calendar.png"
            }
            containerClasses={calendarActive ? "w-[32px] h-[30px]" : "w-[20px] h-[20px]"}
          />
        </div>
        <p className={navClasses}>Calendar</p>
        {calendarActive && <MenuItemActive />}
      </button>
      <StudiosMenu />
      <RequestsMenu />
      <button
        type="button"
        className={activeProjectsActive ? navActiveContainerClasses : navContainerClasses}
        onClick={() => push("/active-projects")}
      >
        <div className={activeProjectsActive ? iconActiveClasses : iconClasses}>
          <Media
            type="image"
            link={activeProjectsActive ? "/icons/project.svg" : "/images/Admin/sparkle.svg"}
            blurLink="/images/Admin/sparkle.png"
            containerClasses={activeProjectsActive ? "w-7 h-7" : "w-5 h-5"}
          />
        </div>
        <p className={navClasses}>Active Projects</p>
        {activeProjectsActive && <MenuItemActive project />}
      </button>
      <button type="button" className={navContainerClasses}>
        <div className={iconClasses}>
          <Media
            type="image"
            link="/images/Admin/recent.svg"
            blurLink="/images/Admin/recent.png"
            containerClasses="w-[20px] h-[20px]"
          />
        </div>
        <p className={navClasses}>History</p>
      </button>
    </div>
  )
}

export default MenuList
