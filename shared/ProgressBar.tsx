const ProgressBar = ({ value }) => (
  <div
    className="h-[4px] w-full
              rounded-full bg-[#d2d2d21f]"
  >
    <div
      style={{
        width: `${value}%`,
      }}
      className="h-full
                  rounded-full
                  bg-gradient_s_1
                  shadow-[0px_0px_24px_0px_#a1ea0499]"
    />
  </div>
)

export default ProgressBar
