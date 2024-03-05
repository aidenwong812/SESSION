import { useAuth } from "@/providers/AuthProvider"
import Button from "@/shared/Button"

const LogoutAlert = ({ handleClose }) => {
  const { logout } = useAuth()

  const handleClick = async () => {
    await logout()
    handleClose()
  }
  return (
    <div className="flex size-full flex-col">
      <p className="font-urwgeometric_medium text-[48px] text-gray_1">
        Are you sure you want to <br />
        <span className="!text-s_error">log out</span>?
      </p>
      <div className="flex w-full grow flex-col justify-end gap-y-[20px]">
        <Button
          id="cancel-btn"
          type="button"
          className="h-[48px] w-full border-x border-b-[2px] border-x-gray_overlay_6
                                border-b-gray_overlay_6
                                !bg-transparent bg-none
                                font-urwgeometric_bold !text-s_error 
                                !shadow-none md:h-[28.8px] md:text-[9.6px]
                                lg:h-[38.4px] lg:text-[12.8px] xl:h-[48px]
                                xl:text-[16px]"
          pulseColor="#A1EA04"
          bgVariant="primary"
          onClick={handleClick}
        >
          Log Out
        </Button>
        <Button
          id="delete-btn"
          type="button"
          className="h-[48px] w-full border-x-[1px] border-b-[2px] border-x-[#A1EA04]
                                border-b-[#A1EA04] font-urwgeometric_bold
                                text-black shadow-[0px_0px_40px_0px_#a1ea0466]
                                md:h-[28.8px] md:text-[9.6px]
                                lg:h-[38.4px] lg:text-[12.8px]
                                xl:h-[48px]
                                xl:text-[16px]"
          pulseColor="white"
          onClick={handleClose}
        >
          Cancel
        </Button>
      </div>
    </div>
  )
}

export default LogoutAlert
