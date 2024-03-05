import { twMerge } from "tailwind-merge"

export default function Badge({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={twMerge(
        "px-6 py-2 rounded-full bg-gray_overlay_6 leading-none text-gray_2 font-urwgeometric w-fit",
        className,
      )}
    >
      {children}
    </span>
  )
}
