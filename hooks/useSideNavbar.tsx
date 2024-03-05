import { useRouter } from "next/router"
import { useState } from "react"

export enum SIDE_NAVS {
  DASHBOARD = "DASHBOARD",
  CALENDAR = "CALENDAR",
  SESSION_REQUESTS = "SESSION_REQUESTS",
  PROJECT_REQUESTS = "PROJECT_REQUESTS",
}

const useSideNavbar = () => {
  const navClasses = "text-gray_2 text-[14px] font-urwgeometric_medium mt-[-7px]"
  const iconActiveClasses = `w-[32px] aspect-[1/1] flex justify-center items-center
      rounded-full bg-black_0 relative z-[2]`
  const iconClasses = `w-[32px] aspect-[1/1] flex justify-center items-center
      rounded-full bg-gray_overlay_6`
  const navContainerClasses = `relative z-[2] flex gap-x-[8px] w-full items-center py-[8px] px-[18px] cursor-pointer bg-gray_overlay_3`
  const navActiveContainerClasses = `relative z-[2] flex gap-x-[8px] w-full items-center py-[8px] bg-gray_overlay_6 px-[18px] cursor-pointer`

  const { pathname } = useRouter()
  const dashboardActive = pathname.includes("/dashboard")
  const calendarActive = pathname.includes("/calendar")
  const studioInfoActive = pathname.includes("/studio-info")
  const reviewsActive = pathname.includes("/reviews")
  const studioActive = studioInfoActive || reviewsActive
  const sessionRequestsActive = pathname.includes("/session-requests")
  const projectRequestsActive = pathname.includes("/project-requests")
  const requestActive = sessionRequestsActive || projectRequestsActive
  const activeProjectsActive = pathname.includes("/active-projects")

  const [selectedNav, setSelectedNav] = useState()

  return {
    navActiveContainerClasses,
    iconActiveClasses,
    iconClasses,
    navContainerClasses,
    navClasses,
    selectedNav,
    setSelectedNav,
    dashboardActive,
    calendarActive,
    studioActive,
    studioInfoActive,
    reviewsActive,
    requestActive,
    sessionRequestsActive,
    projectRequestsActive,
    activeProjectsActive,
  }
}

export default useSideNavbar
