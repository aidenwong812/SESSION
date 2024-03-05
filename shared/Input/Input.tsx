import { ChangeEventHandler, useEffect, useState } from "react"
import { useFormContext, useFormState } from "react-hook-form"
import Media from "../Media"
import {
  ValidIcon,
  ValidBlurIcon,
  ErrorIcon,
  ErrorBlurIcon,
  UnSecureBlurIcon,
  UnSecureIcon,
  InfoIcon,
  InfoBlurIcon,
  SecureIcon,
  SecureBlurIcon,
} from "../Icons"

interface IInput {
  id?: string
  name?: string
  value?: any
  className?: string
  containerClassName?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  hookToForm: boolean
  type: "text" | "password" | "url" | "number"
  classNameError?: string
  disabled?: boolean
  startIcon?: any
  endIcon?: any
  infoText?: string
}

function Input({
  id,
  name,
  value,
  type = "text",
  placeholder,
  hookToForm,
  onChange,
  className,
  containerClassName,
  classNameError,
  disabled,
  startIcon = null,
  endIcon = null,
  infoText,
}: IInput) {
  const [isSecure, setIsSecure] = useState(true)
  const [canTrigger, setCanTrigger] = useState(false)
  const formContext = useFormContext()
  const formState = useFormState()
  const isFullyHooked = name && hookToForm && formContext

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
        className={`relative flex items-center
      overflow-hidden rounded-full
      ${containerClassName || ""}
      ${isValid ? "!border-t-[1px] !border-[#a1ea04]" : ""}
      ${isInvalid ? "!border-t-[1px] !border-s_error" : ""}`}
      >
        <input
          {...(id && { id })}
          type={type === "password" ? (isSecure ? "password" : "text") : type}
          value={value}
          placeholder={placeholder}
          className={`h-full grow 
          rounded-full border-x-[1px]
          border-b-[2px] border-none !bg-[transparent]
          ${className || ""}`}
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
          disabled={disabled}
          onKeyDown={() => setCanTrigger(true)}
          autoComplete="off"
        />
        <div
          className="absolute left-0 flex h-full items-center
          pl-[20px]"
        >
          {startIcon}
        </div>
        <div
          className="absolute right-0
        flex h-full items-center gap-x-[10px]
        pr-[20px]"
        >
          {isValid && (
            <Media
              type="image"
              link={ValidIcon}
              blurLink={ValidBlurIcon}
              containerClasses="w-[24px] h-[24px]"
            />
          )}
          {endIcon}
          {type === "password" && (
            <button type="button" onClick={() => setIsSecure(!isSecure)}>
              {isSecure ? (
                <Media
                  type="image"
                  link={UnSecureIcon}
                  blurLink={UnSecureBlurIcon}
                  containerClasses="w-[24px] h-[24px]"
                />
              ) : (
                <Media
                  type="image"
                  link={SecureIcon}
                  blurLink={SecureBlurIcon}
                  containerClasses="w-[24px] h-[24px]"
                />
              )}
            </button>
          )}
        </div>
      </div>
      {(isInvalid || infoText) && (
        <div
          className={`flex gap-x-[5px]
        pl-[20px] pt-[10px] ${classNameError || ""}`}
        >
          <Media
            type="image"
            link={infoText ? InfoIcon : ErrorIcon}
            blurLink={infoText ? InfoBlurIcon : ErrorBlurIcon}
            containerClasses="w-[12px] h-[12px]"
          />
          <pre className="pr-[10px] font-urwgeometric leading-[100%]">
            {(fieldError?.message as string) || infoText}
          </pre>
        </div>
      )}
    </label>
  )
}

Input.defaultProps = {
  hookToForm: false,
  type: "text",
  hasInfoText: false,
}

export default Input
