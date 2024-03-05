import React from "react"
import { ILayout } from "./types"
import SeoHead from "../SeoHead"
import MobileHeader from "../Header/MobileHeader/MobileHeader"

const MobileLayout = ({ children }: ILayout) => (
  <div
    className="relative h-screen w-screen
    overflow-x-hidden bg-black_0
    bg-[url('/images/Layout/m_bg.png')] bg-cover bg-[bottom_right]"
  >
    <SeoHead
      title="SESSION"
      description="Book your next studio session today"
      image="/images/seo_logo.png"
    />
    <MobileHeader />
    <div
      className="relative z-[2]
      flex h-screen w-screen flex-col
      justify-between overflow-hidden p-[20px] xs:py-[32px]"
    >
      {children}
    </div>
  </div>
)

export default MobileLayout
