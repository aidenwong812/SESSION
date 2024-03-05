import { InputHTMLAttributes } from "react"

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  id: string
  label?: string
  onChange?: any
}

const Checkbox = ({ checked, onChange, id, className, label, ...rest }: ICheckbox) => (
  <>
    <input checked={checked} type="checkbox" hidden id={id} className="hidden" {...rest} />
    <button
      {...(onChange && {
        onClick: onChange,
      })}
      className="cursor-pointer"
      type="button"
    >
      <div
        className="size-[24px] rounded-[4px] border-[2px]
          border-[#d2d2d22e] bg-black_0 p-[5px]"
      >
        {checked && (
          <div
            className="size-full rounded-[2px] bg-gradient_s_1
              shadow-[0px_0px_10px_10px_#a1ea041a]"
          />
        )}
      </div>
    </button>
  </>
)

export default Checkbox
