import React from "react"
import { ILayout } from "./types"
import SeoHead from "../SeoHead"
import SideNavbar from "../Admin/SideNavbar"
import SideMenuProvider from "../../providers/SideMenuProvider"

const AdminLayout = ({ children }: ILayout) => (
  <div
    className="no-scrollbar relative flex
    h-screen w-screen
    overflow-x-hidden bg-[url('/images/Admin/background.png')] bg-[100%_auto] bg-cover"
  >
    <SeoHead
      title="SESSION"
      description="Book your next studio session today"
      image="/images/seo_logo.png"
    />
    <SideMenuProvider>
      <SideNavbar />
    </SideMenuProvider>
    <div className="no-scrollbar max-h-screen w-full overflow-y-auto">{children}</div>
  </div>
)

export default AdminLayout
