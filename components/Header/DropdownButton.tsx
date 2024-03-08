const DropdownButton = ({ children, onClick, text, textClasses = "" }) => (
  <button
    type="button"
    onClick={onClick}
    className="flex w-[200px] items-center gap-x-[10px] p-[10px]"
  >
    <div
      className="flex size-[24px] items-center justify-center
      rounded-full bg-gray_overlay_3"
    >
      {children}
    </div>
    <p className={`font-urwgeometric text-[12px] ${textClasses}`}>{text}</p>
  </button>
)

export default DropdownButton
