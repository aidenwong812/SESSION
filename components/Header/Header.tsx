import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import Media from "@/shared/Media"
import Button from "@/shared/Button"
import getStudioByStudioId from "@/lib/firebase/getStudioByStudioId"
import PFPDropdown from "./PFPDropdown"

const Header = () => {
  const [studio, setStudio] = useState<any>({})
  const { query } = useRouter()
  const studioId = query.studio

  useEffect(() => {
    const init = async () => {
      const res = await getStudioByStudioId(studioId)
      if (!res.error) setStudio(res)
    }
    init()
  }, [studioId])

  return (
    <>
      <Link href="/">
        <div className="cursor-pointer">
          <Media
            type="image"
            link="/images/Header/music-medium-logo.svg"
            blurLink="/images/Header/music-medium-logo.png"
            containerClasses="md:w-[135px] md:h-[53px]
            xs:w-[100px] samsungS8:w-[96px] w-[85.3px]
            aspect-[135/53]"
          />
        </div>
      </Link>
      <div className="flex gap-x-[10px]">
        <Button
          id="logo-btn"
          type="button"
          className="aspect-[210/40] !w-[179.2px] rounded-full bg-gray_overlay_6
          bg-none font-urwgeometric_semibold text-[14px]
          !text-[#a1ea04] shadow-[0px_12px_24px_0px_#0000003d]
          backdrop-blur-[20px]
          samsungS8:!w-[201.6px] xs:!w-[210px] xs:text-[16px]"
          pulseColor="white"
          bgVariant="primary"
        >
          <p className="drop-shadow-xl drop-shadow-session">{studio?.name}</p>
        </Button>
        <PFPDropdown />
      </div>
    </>
  )
}

export default Header
