import { FC } from "react"
import Select from "@/shared/Select"
import { ISelectOptions } from "@/shared/Select/Select"

interface SelectBoxProps {
  label?: string
  id?: string
  name?: string
  value?: any
  onChange?: () => any
  placeholder?: string
  options: ISelectOptions[]
  multiple?: boolean
  dropDownLabel?: string
  hookToForm?: boolean
}

const SelectBox: FC<SelectBoxProps> = ({
  label,
  id,
  name,
  value,
  onChange,
  placeholder,
  options,
  multiple = false,
  dropDownLabel,
  hookToForm = true,
}) => (
  <div className="relative w-full">
    <p className="pb-[8px] pl-[20px] font-urwgeometric text-[16px] text-gray_1">{label || ""}</p>
    <Select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className={`font-urwgeometric ${value?.length ? "text-gray_1" : "text-gray_2"} text-[16px]`}
      containerClassName="min-h-[48px] flex items-center justify-between
      border-l-[1px] border-l-gray_overlay_6
      border-r-[1px] border-r-gray_overlay_6
      border-b-[2px] border-b-gray_overlay_6
      shadow-[12px_12px_32px_0px_#15151499,-12px_-12px_32px_0px_#40403b33]
      backdrop-blur-[12px] py-[10px]
      bg-gray_overlay_6 px-[20px]"
      classNameError="text-s_error font-urwgeometric_medium text-[12px]"
      options={options}
      placeholder={placeholder}
      hookToForm={hookToForm}
      multiple={multiple}
      dropDownLabel={dropDownLabel}
    />
  </div>
)

export default SelectBox
