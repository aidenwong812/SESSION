import { useRouter } from "next/router"
import Form from "@/shared/Form"
import Media from "@/shared/Media"
import Button from "@/shared/Button"
import { useAuth } from "@/providers/AuthProvider"
import SocialButtons from "../../../SocialButtons"
import Divider from "../../../Divider"
import InputForm from "../InputForm"
import { validation } from "./validation"
import ClipSpan from "../../../ClipSpan"

const EmailAndPassword = () => {
  const { login, loading } = useAuth()
  const router = useRouter()

  return (
    <Form onSubmit={login} validationSchema={validation} className="flex w-full flex-col">
      <SocialButtons />
      <Divider className="py-[2vh]" />
      <InputForm />
      <button
        type="button"
        onClick={() => router.push("/forgotpass")}
        className="ml-[20px] flex
              items-center gap-x-[4px] pt-[8px]"
      >
        <Media
          type="image"
          link="/images/SignIn/info.svg"
          blurLink="/images/SignIn/info.png"
          containerClasses="w-[10px] aspect-[1/1]"
        />
        <p className="font-urwgeometric text-[12px] leading-[12px] text-gray_2 underline">
          Forgot Password?
        </p>
      </button>
      <Button
        id="log-in"
        type="submit"
        className="mt-[2vh] h-[48px] w-full
              border-x-[1px] border-b-[2px]
              border-x-[#A1EA04] border-b-[#A1EA04]
              font-urwgeometric_bold text-black
              shadow-[0px_0px_40px_0px_#a1ea0466]"
        pulseColor="white"
        disabled={loading}
      >
        Log In
      </Button>
      <p
        className="pt-[2vh] text-center
                font-urwgeometric text-[14px] text-gray_1"
      >
        {`Don't have an account?`} &nbsp;
        <button type="button" onClick={() => router.push("/signup")}>
          <p className="text-[#a1ea04] underline">
            <ClipSpan className="font-urwgeometric_bold">Sign up</ClipSpan>
          </p>
        </button>
      </p>
    </Form>
  )
}

export default EmailAndPassword
