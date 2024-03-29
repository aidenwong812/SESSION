const MultipleList = ({ options, onChange, value, label }) => (
  <div className="no-scrollbar grow overflow-y-auto px-[20px] md:px-[60px]">
    <p className="pb-[20px] text-[16px] text-[#A1EA04]">{label}</p>
    <div className="flex flex-wrap items-start gap-[10px]">
      {options.map((option) => {
        const isActive = value.find((item) => item === option) + 1

        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`rounded-full px-[30px] py-[10px] ${
              isActive ? "bg-gradient_s_1 text-black_0" : "bg-gray_overlay_6 text-gray_1"
            }`}
          >
            <p className="font-urwgeometric_medium text-[16px]">{option}</p>
          </button>
        )
      })}
    </div>
  </div>
)

export default MultipleList
