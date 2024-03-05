import { useRouter } from "next/router"
import { useAuth } from "@/providers/AuthProvider"
import Button from "@/shared/Button/Button"
import useIsMobile from "@/hooks/useIsMobile"
import BackwardButton from "../../../BackwardButton"

const SentRestEmail = () => {
  const { STEPS, setCurStep } = useAuth()
  const router = useRouter()
  const isMobile = useIsMobile()

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <div className="pb-[60px]">
        <BackwardButton onClick={() => setCurStep(STEPS.INPUT_EMAIL)} className="mb-[30px]" />
        <p
          className="font-urwgeometric_medium text-[32px]
          leading-[48px] text-gray_1 samsungS8:text-[36px] xs:text-[40px] md:pt-[30px] md:text-[48px]"
        >
          Reset your Password
        </p>
        <p
          className="font-urwgeometric text-[14px] 
          leading-[20px] text-gray_1 samsungS8:text-[16px] xs:text-[18px]
          md:pt-[20px]"
        >
          {isMobile ? (
            <>
              We’ve sent you an email with details on how to
              <br />
              reset your password. Check your inbox.
            </>
          ) : (
            <>
              We’ve sent you an email with details on how to reset your password.
              <br />
              Check your inbox.
            </>
          )}
        </p>
      </div>
      <div className="flex grow items-end">
        <Button
          id="tell-about-you"
          type="submit"
          className="h-[48px] w-full
                border-x-[1px] border-b-[2px]
                border-x-[#A1EA04] border-b-[#A1EA04]
                font-urwgeometric_bold text-black
                shadow-[0px_0px_40px_0px_#a1ea0466]"
          pulseColor="white"
          onClick={() => router.push("/signin")}
        >
          Back to Log In
        </Button>
      </div>
    </>
  )
}

export default SentRestEmail
