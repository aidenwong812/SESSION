import Image from "next/image"
import React from "react"
import { useLayout } from "@/providers/LayoutProvider"
import { ILayout } from "./types"
import SeoHead from "../SeoHead"
import StudioHeader from "../Header/StudioHeader"

const FullLayout = ({ children }: ILayout) => {
  const { studio } = useLayout()

  return (
    <div
      className="relative flex
    min-h-screen w-screen
    overflow-hidden"
    >
      <Image src={studio?.photo} alt="" layout="fill" objectFit="cover" className="opacity-15" />
      <SeoHead
        title="SESSION"
        description="Book your next studio session today"
        image="/images/seo_logo.png"
      />
      <div
        className="z-10 flex
      h-screen w-[640px] flex-col bg-black_0
      bg-gradient-to-b from-[#a1ea0400]
      from-0% via-[#a1ea0405] via-75%
      to-[#a1ea041a] to-100% px-[60px] py-[2vh]"
      >
        <StudioHeader />
        <div className="flex h-full grow flex-col pt-[2.5vh]">{children}</div>
      </div>
    </div>
  )
}

export default FullLayout
