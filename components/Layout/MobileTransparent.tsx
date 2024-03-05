import React from "react"
import { ILayout } from "./types"
import SeoHead from "../SeoHead"
import MobileHeader from "../Header/MobileHeader/MobileHeader"

const MobileDarkLayout = ({ children }: ILayout) => (
  <div
    className="relative h-screen w-screen
    overflow-x-hidden bg-black_0
    bg-[url('/images/Layout/m_bg.png')] bg-cover bg-[bottom_left]"
  >
    <SeoHead
      title="SESSION"
      description="Book your next studio session today"
      image="/images/seo_logo.png"
    />
    <MobileHeader />
    <div className="relative z-[2] h-screen w-screen overflow-hidden">{children}</div>
  </div>
)

export default MobileDarkLayout
