import { useRouter } from "next/router"
import Button from "@/shared/Button"
import { useAuth } from "@/providers/AuthProvider"
import { STEPS } from "@/lib/consts/authStep"
import WelcomeText from "../../../WelcomeText"
import ClipSpan from "../../../ClipSpan"
import FadeIn from "../../../FadeIn"

const Landing = () => {
  const router = useRouter()
  const { setCurStep } = useAuth()

  return (
    <FadeIn className="flex h-full flex-col justify-end">
      <WelcomeText />
      <Button
        id="landing-btn"
        type="submit"
        className="my-[24.6px] h-[39.3px] w-full border-x-[1px] 
                border-b-[2px] border-x-[#A1EA04] border-b-[#A1EA04]
                font-urwgeometric_bold text-black
                shadow-[0px_0px_40px_0px_#a1ea0466] samsungS8:h-[44.3px]
                xs:my-[30px] xs:h-[48px]
                lg:my-[27.6px]"
        pulseColor="white"
        onClick={() => setCurStep(STEPS.INPUT_EMAIL_PASSWORD)}
      >
        <span>Log In</span>
      </Button>
      <p
        className="text-center font-urwgeometric
                text-[14px] text-gray_1"
      >
        {`Don't have an account?`} &nbsp;
        <button type="button" onClick={() => router.push("/signup")}>
          <p className="text-[#A1EA04] underline">
            <ClipSpan className="font-urwgeometric_bold">Sign up</ClipSpan>
          </p>
        </button>
      </p>
    </FadeIn>
  )
}

export default Landing
