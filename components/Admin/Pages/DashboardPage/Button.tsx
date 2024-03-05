const Button = ({ onClick = () => {}, children, className = "" }) => (
  <button
    type="button"
    className={`${className} rounded-full bg-gradient_s_1 px-[16px] py-[4px]`}
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button
