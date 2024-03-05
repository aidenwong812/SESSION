import { InputHTMLAttributes } from "react"

interface IRadiobox extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  id: string
  label?: string
}

const Radiobox = ({ checked, onChange, id, className, label, ...rest }: IRadiobox) => (
  <>
    <input
      checked={checked}
      onChange={onChange}
      type="checkbox"
      hidden
      id={id}
      className="hidden"
      {...rest}
    />
    <label htmlFor={id} className="cursor-pointer">
      <div
        className={`size-[24px]
          rounded-full border-x-[1px]
          border-b-[2px] border-x-gray_overlay_6
          border-b-gray_overlay_6 bg-black_0
          p-[5px]`}
      >
        {checked && (
          <div
            className="size-full rounded-full
              bg-gradient_s_1"
          />
        )}
      </div>
    </label>
  </>
)

export default Radiobox
