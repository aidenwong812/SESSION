import { twMerge } from "tailwind-merge"
import Icon from "../Icon"

export type ViewType = "grid" | "list"

type ViewSwitchProps = {
  view: ViewType
  setView: (view: ViewType) => void
}
const activeGridViewClasses = `border-b-gray_overlay_6 border-l-gray_overlay_6 bg-gray_overlay_6 rounded-full`

export default function ViewSwitch({ view, setView }: ViewSwitchProps) {
  return (
    <div className="flex h-8 w-16 items-center rounded-full bg-gray_overlay_6 shadow-gray_overlay_3_shadow">
      <button
        type="button"
        className={twMerge(
          "flex size-8 items-center justify-center border-2 border-transparent",
          view === "list" && activeGridViewClasses,
        )}
        onClick={() => setView("list")}
      >
        <Icon name="List" active={view === "list"} size={18} />
      </button>
      <button
        type="button"
        className={twMerge(
          "flex size-8 items-center justify-center border-2 border-transparent",
          view === "grid" && activeGridViewClasses,
        )}
        onClick={() => setView("grid")}
      >
        <Icon name="GridFour" active={view === "grid"} size={18} />
      </button>
    </div>
  )
}
