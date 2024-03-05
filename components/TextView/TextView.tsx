import { FC } from "react"

interface TextViewProps {
  label?: string
  text: string
  className?: string
  textClassName?: string
}
const TextInput: FC<TextViewProps> = ({ label = "", text, className = "", textClassName = "" }) => (
  <div className="w-full">
    {label && (
      <p
        className="pb-[8px]
            pl-[20px] font-urwgeometric text-[14px] text-gray_1 md:pl-[12px] 
            md:text-[16px] lg:pl-[16px]
            xl:pl-[20px]"
      >
        {label}
      </p>
    )}
    <div
      className={`relative flex min-h-[48px]
      w-full items-center
      overflow-hidden rounded-full 
      border-x-[1px] border-b-[2px] border-x-gray_overlay_6 border-b-gray_overlay_6
      bg-gray_overlay_6 py-[5px]
      shadow-[12px_12px_32px_0px_#15151499,-12px_-12px_32px_0px_#40403b33] backdrop-blur-[12px]
      md:min-h-[28.8px] lg:min-h-[38.4px]
      xl:min-h-[48px] ${className}`}
    >
      <pre
        className={`flex size-full grow items-center justify-start rounded-full border-x-[1px]
        border-b-[2px] border-none !bg-[transparent] px-[20px] font-urwgeometric
        text-[14px] text-gray_1 md:text-[16px] ${textClassName}`}
      >
        {text}
      </pre>
    </div>
  </div>
)

export default TextInput
