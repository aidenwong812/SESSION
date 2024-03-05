import { useRouter } from "next/router"
import Form from "@/shared/Form"
import Button from "@/shared/Button/Button"
import { useAuth } from "@/providers/AuthProvider"
import TextInput from "../../../TextInput"
import ClipSpan from "../../../ClipSpan"
import Divider from "../../../Divider"
import SocialButtons from "../../../SocialButtons"
import { validation } from "./validation"

const EmailForm = () => {
  const { userEmail, setUserEmail, checkEmail } = useAuth()
  const router = useRouter()

  return (
    <Form
      onSubmit={checkEmail}
      validationSchema={validation}
      className="flex w-full grow flex-col justify-end"
    >
      <SocialButtons />
      <Divider className="py-[20px]" />
      <TextInput
        type="text"
        id="useremail"
        name="useremail"
        value={userEmail}
        onChange={setUserEmail}
        placeholder="Enter Email..."
        label="Email"
      />
      <Button
        id="create-email"
        type="submit"
        className="mt-[20px] h-[48px] 
                w-full border-x-[1px] border-b-[2px]
                border-x-[#A1EA04] border-b-[#A1EA04]
                font-urwgeometric_bold text-black
                shadow-[0px_0px_40px_0px_#a1ea0466] samsungS8:mt-[25px]
                xs:mt-[30px]"
        pulseColor="white"
      >
        Sign up
      </Button>
      <p
        className="pt-[20px] text-center
          font-urwgeometric text-[14px] text-gray_1 samsungS8:pt-[25px]"
      >
        Already have an account? &nbsp;
        <button type="button" onClick={() => router.push("/signin")}>
          <p className="text-[#a1ea04] underline">
            <ClipSpan className="font-urwgeometric_bold">Log In</ClipSpan>
          </p>
        </button>
      </p>
    </Form>
  )
}

export default EmailForm
