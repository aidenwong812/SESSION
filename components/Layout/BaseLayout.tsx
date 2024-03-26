import Image from "next/image"
import React from "react"
import { useLayout } from "@/providers/LayoutProvider"
import { ILayout } from "./types"
import SeoHead from "../SeoHead"
import BaseHeader from "../Header/BaseHeader"

const BaseLayout = ({ children }: ILayout) => {
  const { studio } = useLayout()

  return (
    <div
      className="no-scrollbar relative
    h-screen w-screen
    overflow-x-hidden"
    >
      <Image src={studio?.photo} alt="" layout="fill" objectFit="cover" />
      <SeoHead
        title="SESSION"
        description="Book your next studio session today"
        image="/images/seo_logo.png"
      />
      <BaseHeader />
      <div
        className="no-scrollbar absolute z-[1] flex
      min-h-screen w-screen justify-center overflow-y-auto
      overflow-x-hidden bg-[#121211cc]"
      >
        <div className="pb-[50px] pt-[120px] md:w-[768px] lg:w-[1024px] xl:w-[1280px]">
          {children}
        </div>
      </div>
    </div>
  )
}

export default BaseLayout
