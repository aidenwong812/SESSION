import { useRouter } from "next/router"
import { useEffect } from "react"
import { useAuth } from "@/providers/AuthProvider"
import { STATUS } from "@/lib/consts/authStatus"
import { DEFAULT_STUDIO_ID } from "@/lib/consts/global"
import LayoutProvider from "@/providers/LayoutProvider"
import LoadingPage from "../Pages/LoadingPage"
import BaseLayout from "./BaseLayout"
import FullLayout from "./FullLayout"
import MobileDarkLayout from "./MobileDarkLayout"
import MobileLayout from "./MobileLayout"
import MobileTransparent from "./MobileTransparent"
import { ILayout } from "./types"
import AdminLayout from "./AdminLayout"

const layoutContainers = {
  full: FullLayout,
  base: BaseLayout,
  mobile: MobileLayout,
  mobile_dark: MobileDarkLayout,
  mobile_transparent: MobileTransparent,
  admin: AdminLayout,
}

interface ILayoutFactory extends ILayout {
  type: keyof typeof layoutContainers
}

const Layout = ({ children, type }: ILayoutFactory) => {
  const { authStatus, userData } = useAuth()
  const router = useRouter()
  const { pathname } = router

  const publicRoutes = ["/signin", "/signup", "/forgotpass", "/[studio]"]
  const isPublicPage = publicRoutes.includes(pathname)

  const isLoading =
    (!isPublicPage && authStatus === STATUS.UNAUTHORIZED) ||
    (isPublicPage && authStatus === STATUS.AUTHORIZED) ||
    authStatus === STATUS.LOADING

  useEffect(() => {
    if ((isPublicPage || pathname === "/") && authStatus === STATUS.AUTHORIZED)
      router.push(`/${userData?.studioId || DEFAULT_STUDIO_ID}/booktype`)
    if (!isPublicPage && authStatus === STATUS.UNAUTHORIZED) router.push(`/${DEFAULT_STUDIO_ID}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPublicPage, authStatus])
  const Container = layoutContainers[type]

  return (
    <LayoutProvider>
      <div className={`${isLoading ? "visible" : "hidden"}`}>
        <LoadingPage />
      </div>
      <div className={`${isLoading ? "hidden" : "visible"}`}>
        <Container>{children}</Container>
      </div>
    </LayoutProvider>
  )
}

export default Layout
