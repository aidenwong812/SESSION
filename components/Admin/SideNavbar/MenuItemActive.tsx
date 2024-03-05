import { twMerge } from "tailwind-merge"

const MenuItemActive = ({ project = false }) => (
  <>
    <div
      className={twMerge(
        "absolute top-0 left-0 h-full w-full bg-gradient_s_overlay_1 z-[1]",
        project && "bg-gradient_p_overlay_1",
      )}
    />
    <div
      className={twMerge(
        "absolute top-0 left-0 h-full w-[2px] bg-gradient_s_1 z-[1]",
        project && "bg-gradient_p_1",
      )}
    />
  </>
)

export default MenuItemActive
