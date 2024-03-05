import { FC } from "react"
import Input from "@/shared/Input"
import TextArea from "@/shared/TextArea/TextArea"

interface TextInputProps {
  label: string
  id: string
  value: any
  onChange: any
  name: string
  placeholder: string
  type: "text" | "password" | "url" | "number"
  classNameError?: string
  variant?: "single" | "multiple"
  infoText?: string
}
const TextInput: FC<TextInputProps> = ({
  label,
  value,
  onChange,
  id,
  name,
  placeholder,
  type = "text",
  classNameError = "",
  variant = "single",
  infoText = "",
}) => (
  <div className="w-full">
    <p className="pb-[8px] pl-[20px] font-urwgeometric text-[16px] text-gray_1">{label}</p>
    {variant === "single" ? (
      <Input
        id={id}
        name={name}
        value={value}
        type={type}
        onChange={(e) => onChange(e.target.value)}
        containerClassName="w-full h-[48px]
        border-l-[1px] border-l-gray_overlay_6
        border-r-[1px] border-r-gray_overlay_6
        border-b-[2px] border-b-gray_overlay_6
        shadow-[12px_12px_32px_0px_#15151499,-12px_-12px_32px_0px_#40403b33]
        backdrop-blur-[12px] bg-gray_overlay_6"
        className="px-[20px] pt-[10px] font-urwgeometric_regular
        !text-[16px] text-gray_2  outline-none
        placeholder:text-[14px] placeholder:text-gray_2 focus:border-none focus:ring-0"
        placeholder={placeholder}
        classNameError={`text-s_error font-urwgeometric_medium
        text-[12px] ${classNameError}`}
        infoText={infoText}
        hookToForm
      />
    ) : (
      <TextArea
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={5}
        className="!text-[16px] placeholder:text-[14px]
        placeholder:text-gray_2"
        containerClassName="border-l-[1px] border-l-gray_overlay_6
        border-r-[1px] border-r-gray_overlay_6
        border-b-[2px] border-b-gray_overlay_6
        !bg-gray_overlay_6"
        placeholder="Describe your project. What are you planning on using the studio for? Do you need any specific equipment? Let us know..."
        classNameError={`text-s_error font-urwgeometric_medium
        text-[12px] ${classNameError}`}
        hookToForm
      />
    )}
  </div>
)

export default TextInput
