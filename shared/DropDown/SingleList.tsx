import Radiobox from "../Radiobox"

const SingleList = ({ options, onChange, value }) => (
  <div className="no-scrollbar grow overflow-y-auto bg-[#121211cc]">
    {options.map((option) => (
      <button
        key={option.value}
        type="button"
        onClick={() => onChange(option)}
        className="flex w-full items-center gap-x-[10px] border-t-[1px]
                    border-t-gray_overlay_6 p-[20px] md:px-[60px]"
      >
        <Radiobox checked={option.value === value} id={option.value} readOnly />
        <p
          className="font-urwgeometric text-[16px]
                        text-gray_1"
        >
          {option.label}
        </p>
      </button>
    ))}
  </div>
)

export default SingleList
