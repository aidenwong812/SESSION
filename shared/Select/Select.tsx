import { FC, useEffect, useState, ReactNode, useMemo } from "react"
import { useFormContext, useFormState } from "react-hook-form"
import Media from "@/shared/Media"
import { ArrowDownIcon, ErrorBlurIcon, ErrorIcon, ValidBlurIcon, ValidIcon } from "../Icons"
import DropDown from "../DropDown"

export interface ISelectOptions {
  value: string
  label: string | ReactNode
}

interface ISelect {
  id?: string
  name?: string
  value?: any
  className?: string
  containerClassName?: string
  classNameError?: string
  onChange?: () => any
  placeholder?: string
  hookToForm: boolean
  options: ISelectOptions[]
  multiple?: boolean
  dropDownLabel?: string
}

const Select: FC<ISelect> = ({
  id,
  className = "",
  containerClassName = "",
  classNameError = "",
  name,
  value,
  onChange,
  placeholder,
  hookToForm,
  options,
  multiple = false,
  dropDownLabel,
}) => {
  const [isOpenDropDown, setIsOpenDropDown] = useState(false)
  const formContext = useFormContext()
  const formState = useFormState()
  const isFullyHooked = name && hookToForm && formContext
  const fieldError = isFullyHooked && formState?.errors?.[name]
  const [canTrigger, setCanTrigger] = useState(false)

  const isInvalid = fieldError && fieldError?.message && formState?.isSubmitted
  const isValid = isFullyHooked && !fieldError?.message && canTrigger

  const label = useMemo(() => {
    if (!multiple) {
      return options.filter((option) => option.value === value)?.[0]?.label
    }

    return value.map((item) => item.label).join(", ")
  }, [options, value])

  useEffect(() => {
    if (name && hookToForm && value) {
      formContext.setValue(name, value.toString() || "")
      if (!value.length) return
      formContext.trigger(name)
      setCanTrigger(true)
    }
  }, [value, name, formContext, hookToForm])

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        className={`relative w-full overflow-hidden rounded-full font-urwgeometric
        ${isValid ? "!border-t-[1px] !border-[#a1ea04]" : ""}
        ${containerClassName}`}
        onClick={() => setIsOpenDropDown(!isOpenDropDown)}
      >
        <p className={`${className}`}>{label || placeholder}</p>
        <input
          id={id}
          hidden
          name={name}
          value={value || ""}
          readOnly
          {...(isFullyHooked
            ? formContext.register(name, {
                value,
              })
            : {})}
          autoComplete="off"
        />
        <div className="flex grow items-center justify-end gap-x-[5px]">
          {isValid && (
            <Media
              type="image"
              link={ValidIcon}
              blurLink={ValidBlurIcon}
              containerClasses="w-[24px] h-[24px]"
            />
          )}
          <button
            className="flex aspect-[1/1] w-[24px] items-center
              justify-center overflow-hidden rounded-full bg-gray_overlay_6"
            type="button"
            onClick={() => setIsOpenDropDown(!isOpenDropDown)}
          >
            <Media
              type="image"
              link={ArrowDownIcon}
              blurLink={ArrowDownIcon}
              containerClasses="w-[16px] aspect-[1/1]"
            />
          </button>
        </div>
      </div>
      {isInvalid && (
        <div
          className={`flex gap-x-[5px]
          pl-[20px] pt-[10px] ${classNameError}`}
        >
          <Media
            type="image"
            link={ErrorIcon}
            blurLink={ErrorBlurIcon}
            containerClasses="w-[12px] h-[12px]"
          />
          <pre className="font-urwgeometric_medium leading-[100%]">
            {fieldError?.message as string}
          </pre>
        </div>
      )}
      <DropDown
        label={dropDownLabel}
        title={`Choose ${name}`}
        value={value}
        onChange={onChange}
        isVisibleDropDown={isOpenDropDown}
        toggleDropDown={() => setIsOpenDropDown(!isOpenDropDown)}
        options={options}
        multiple={multiple}
      />
    </>
  )
}

export default Select
