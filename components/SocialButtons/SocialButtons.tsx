import GoogleButton from "../GoogleButton"
import TwitterButton from "../TwitterButton"

const SocialButtons = ({ className = "" }) => (
  <div
    className={`flex justify-center gap-x-[10px]
    samsungS8:gap-x-[30px] ${className}`}
  >
    <GoogleButton />
    <TwitterButton />
  </div>
)

export default SocialButtons
