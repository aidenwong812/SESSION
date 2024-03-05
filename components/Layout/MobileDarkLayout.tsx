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
    <div
      className="absolute z-[1] h-screen w-screen bg-black_0 bg-gradient-to-b 
      from-[#a1ea0400]
      via-[#a1ea0405] via-75% to-[#a1ea041a]"
    />
    <div
      className="no-scrollbar relative z-[2] h-screen w-screen
      overflow-y-auto overflow-x-hidden px-[20px] py-[10px] xs:py-[15px]"
    >
      {children}
    </div>
  </div>
)

export default MobileDarkLayout
