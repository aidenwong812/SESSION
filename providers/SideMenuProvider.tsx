import React, { createContext, useContext, useMemo } from "react"
import useSideNavbar from "../hooks/useSideNavbar"

const SideMenuContext = createContext(null)

const SideMenuProvider = ({ children }) => {
  const sideMenuData = useSideNavbar()

  const value = useMemo(
    () => ({
      ...sideMenuData,
    }),
    [sideMenuData],
  )

  return <SideMenuContext.Provider value={value}>{children}</SideMenuContext.Provider>
}

export const useSideMenu = () => {
  const context = useContext(SideMenuContext)
  if (!context) {
    throw new Error("useSideMenu must be used within a SideMenuProvider")
  }
  return context
}

export default SideMenuProvider
