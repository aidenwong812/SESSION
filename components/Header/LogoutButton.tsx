import { useRouter } from "next/router"
import Media from "@/shared/Media"
import { useAuth } from "@/providers/AuthProvider"
import useSelectClickoutside from "@/hooks/useSelectClickoutside"

const LogoutButton = () => {
  const { logout, userData } = useAuth()
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
      {isVisibleSelect && (
        <button
          type="button"
          className="absolute right-0 top-full flex w-[100px] items-center
          gap-x-[10px] rounded-full bg-black_8 p-[10px]"
          onClick={logout}
        >
          <div
            className="flex size-[24px] items-center justify-center
          rounded-full bg-gray_overlay_3"
          >
            <Media
              type="image"
              link="/images/Admin/logout.svg"
              blurLink="/images/Admin/logout.png"
              containerClasses="w-[16px] h-[16px]"
            />
          </div>
          <p className="pb-[3px] font-urwgeometric text-[12px] text-s_error">Log Out</p>
        </button>
      )}
    </div>
  )
}

export default LogoutButton
