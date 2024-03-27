import Image from "next/image"
import React from "react"
import SideMenuProvider from "@/providers/SideMenuProvider"
import { useLayout } from "@/providers/LayoutProvider"
import { ILayout } from "./types"
import SeoHead from "../SeoHead"
import SideNavbar from "../Admin/SideNavbar"

const AdminLayout = ({ children }: ILayout) => {
  const { studio } = useLayout()

  return (
    <div
      className="no-scrollbar relative flex
    h-screen w-screen
    overflow-x-hidden"
    >
      <Image
        src={studio?.photo || "/images/Admin/background.png"}
        alt=""
        layout="fill"
        objectFit="cover"
      />
      <SeoHead
        title="SESSION"
        description="Book your next studio session today"
        image="/images/seo_logo.png"
      />
      <SideMenuProvider>
        <SideNavbar />
      </SideMenuProvider>
      <div className="no-scrollbar z-[1] max-h-screen w-full overflow-y-auto">{children}</div>
    </div>
  )
}

export default AdminLayout
