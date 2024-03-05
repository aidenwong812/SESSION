import { useRouter } from "next/router"
import { useAuth } from "@/providers/AuthProvider"
import Button from "@/shared/Button/Button"
import Form from "@/shared/Form"
import useIsMobile from "@/hooks/useIsMobile"
import BackwardButton from "../../../BackwardButton"
import { validation } from "./validation"
import TextInput from "../../../TextInput"

const InputEmail = () => {
  const { userEmail, setUserEmail, updatePassword } = useAuth()
  const router = useRouter()
  const isMobile = useIsMobile()

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <div className="pb-[20px] md:pb-[60px]">
        <BackwardButton onClick={() => router.push("/signin")} className="mb-[30px]" />
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
              Please enter the email you used for your session
              <br />
              account. We send you a link to your email with a
              <br />
              link to reset your password.
            </>
          ) : (
            <>
              Please enter the email you used for your session account. We send you a link to
              <br />
              your email with a link to reset your password.
            </>
          )}
        </p>
      </div>
      <Form
        onSubmit={updatePassword}
        validationSchema={validation}
        className="flex w-full grow
            flex-col items-center justify-end
            gap-y-[20px] md:justify-between
            md:gap-y-0"
      >
        <TextInput
          type="text"
          id="useremail"
          name="useremail"
          value={userEmail}
          onChange={setUserEmail}
          placeholder="Enter Email..."
          label="Email"
          classNameError="!text-gray_2"
        />
        <Button
          id="tell-about-you"
          type="submit"
          className="h-[48px] w-full
                border-x-[1px] border-b-[2px]
                border-x-[#A1EA04] border-b-[#A1EA04]
                font-urwgeometric_bold text-black
                shadow-[0px_0px_40px_0px_#a1ea0466]"
          pulseColor="white"
        >
          Send
        </Button>
      </Form>
    </>
  )
}

export default InputEmail
