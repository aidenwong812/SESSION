import { useRouter } from "next/router"
import Media from "@/shared/Media"
import { useAuth } from "@/providers/AuthProvider"
import useSelectClickoutside from "@/hooks/useSelectClickoutside"
import HeaderDropdown from "./HeaderDropdown"

const PFPDropdown = () => {
  const { userData } = useAuth()
  const router = useRouter()
  const { pathname } = router

  const publicRouters = ["/signin", "/signup", "/forgotpass", "/"]
  const isPublicPage = publicRouters.includes(pathname)

  const { selectRef, setIsVisibleSelect, isVisibleSelect } = useSelectClickoutside()

  return (
    <div className="relative" ref={selectRef}>
      {!isPublicPage && (
        <button
          type="button"
          className="flex size-[40px] items-center justify-center
        rounded-full bg-gradient_s_1"
          onClick={() => setIsVisibleSelect(!isVisibleSelect)}
        >
          <Media
            type="image"
            link={userData?.photoURL || "/images/Header/avatar.svg"}
            blurLink={userData?.photoURL || "/images/Header/avatar.png"}
            containerClasses="w-[26px] h-[26px] rounded-full overflow-hidden"
          />
        </button>
      )}
      {isVisibleSelect && <HeaderDropdown />}
    </div>
  )
}

export default PFPDropdown
