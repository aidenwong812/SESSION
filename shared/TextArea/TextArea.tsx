import { ChangeEventHandler, useEffect, useState } from "react"
import { useFormContext, useFormState } from "react-hook-form"
import Media from "../Media"
import { ErrorBlurIcon, ErrorIcon, ValidBlurIcon, ValidIcon } from "../Icons"

interface ITextArea {
  id?: string
  name?: string
  value?: any
  className?: string
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
  placeholder?: string
  hookToForm: boolean
  classNameError?: string
  disabled?: boolean
  rows?: number
  containerClassName?: string
}

function TextArea({
  id,
  name,
  value,
  placeholder,
  hookToForm,
  onChange,
  className,
  classNameError,
  rows = 1,
  containerClassName,
}: ITextArea) {
  const formContext = useFormContext()
  const isFullyHooked = name && hookToForm && formContext
  const formState = useFormState()
  const [canTrigger, setCanTrigger] = useState(false)

  const fieldError = isFullyHooked && formState?.errors?.[name]
  const isInvalid = fieldError && fieldError?.message && formState?.isSubmitted
  const isValid = isFullyHooked && !fieldError?.message && canTrigger

  useEffect(() => {
    if (name && hookToForm) {
      formContext.setValue(name, value)
      if (canTrigger) formContext.trigger(name, value)
    }
  }, [value, name, formContext, hookToForm])

  return (
    <label {...(id && { htmlFor: id })}>
      <div
        className={`relative
          rounded-[24px] md:rounded-[14.4px] lg:rounded-[19.2px] xl:rounded-[24px]
          ${isValid ? "!border-t-[1px] !border-[#a1ea04]" : ""}
          ${containerClassName}`}
      >
        <textarea
          {...(id && { id })}
          value={value}
          placeholder={placeholder}
          className={`no-scrollbar size-full
            !border-0 !bg-transparent p-[20px]
            font-urwgeometric text-[14px] !text-gray_2
            !outline-none !ring-0
            focus:!border-0 md:rounded-[14.4px] lg:rounded-[19.2px]
            xl:rounded-[24px]
                ${className || ""} `}
          {...(!hookToForm && {
            value,
            onChange,
          })}
          {...(isFullyHooked
            ? formContext.register(name, {
                onChange: (e) => onChange && onChange(e),
              })
            : {})}
          name={name}
          rows={rows}
          onKeyDown={() => setCanTrigger(true)}
        />
        <div
          className="absolute bottom-0 right-0
          flex h-full items-end
          pb-[20px] pr-[20px]"
        >
          {isValid && (
            <Media
              type="image"
              link={ValidIcon}
              blurLink={ValidBlurIcon}
              containerClasses="w-[24px] h-[24px]"
            />
          )}
        </div>
      </div>
      {isInvalid && (
        <div
          className={`flex items-center gap-x-[5px]
        pl-[20px] pt-[10px] ${classNameError || ""}`}
        >
          <Media
            type="image"
            link={ErrorIcon}
            blurLink={ErrorBlurIcon}
            containerClasses="w-[12px] h-[12px]"
          />
          <p className="leading-[100%]">{fieldError?.message as string}</p>
        </div>
      )}
    </label>
  )
}

TextArea.defaultProps = {
  hookToForm: false,
  type: "text",
}

export default TextArea
