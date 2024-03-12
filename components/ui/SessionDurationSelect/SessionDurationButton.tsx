import { twMerge } from "tailwind-merge"
import Button from "@/shared/Button"

const SessionDurationButton = ({ children, active = false, onClick }) => (
  <Button
    id="session-duration-button"
    type="button"
    onClick={onClick}
    className={twMerge(
      "bg-gray_overlay_6 rounded-full px-6 py-2 flex items-center justify-center text-gray_2 font-urwgeometric",
      active && "bg-gradient_s_1 text-black_0 font-urwgeometric_semibold shadow-session_shadow",
    )}
  >
    <p>{children}</p>
  </Button>
)

export default SessionDurationButton
