import { twMerge } from "tailwind-merge"

type CardProps = {
  children: React.ReactNode
  heading: React.ReactNode
  className?: string
}

export default function Card({ children, heading, className }: CardProps) {
  return (
    <div
      className={twMerge(
        "w-full bg-gray_overlay_6 rounded-3xl overflow-hidden backdrop-blur-md",
        className,
      )}
    >
      <div className="rounded-l-full rounded-tr-full bg-gray_overlay_6 px-5 py-4 font-urwgeometric_bold text-gray_1">
        {heading}
      </div>
      <div className="overflow-y-auto px-5 py-3">{children}</div>
    </div>
  )
}
