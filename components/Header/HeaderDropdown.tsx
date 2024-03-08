import { useRouter } from "next/router"
import Media from "@/shared/Media"
import { useAuth } from "@/providers/AuthProvider"
import DropdownButton from "./DropdownButton"

const HeaderDropdown = () => {
  const { push } = useRouter()
  const { logout } = useAuth()

  return (
    <div className="absolute right-0 top-full flex w-[100px] flex-col items-center gap-x-[10px] rounded-full bg-black_8 p-[10px]">
      <DropdownButton
        onClick={() => push("/dashboard")}
        text="Session Commander"
        textClasses="text-white"
      >
        <Media
          type="image"
          link="/images/Header/session-commander.svg"
          blurLink="/images/Header/session-commander.png"
          containerClasses="w-[32px] h-[32px]"
        />
      </DropdownButton>
      <DropdownButton onClick={logout} text="Log Out" textClasses="text-s_error">
        <Media
          type="image"
          link="/images/Admin/logout.svg"
          blurLink="/images/Admin/logout.png"
          containerClasses="w-[16px] h-[16px]"
        />
      </DropdownButton>
    </div>
  )
}

export default HeaderDropdown
