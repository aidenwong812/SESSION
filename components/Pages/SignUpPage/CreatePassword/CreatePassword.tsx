import { useAuth } from "@/providers/AuthProvider"
import Button from "@/shared/Button/Button"
import Form from "@/shared/Form"
import ProgressBar from "@/shared/ProgressBar"
import BackwardButton from "../../../BackwardButton"
import TextInput from "../../../TextInput"
import { validation } from "./validation"

const CreatePassword = () => {
  const { STEPS, userPassword, setUserPassword, setCurStep } = useAuth()

  return (
    <>
      <div className="pt-[70px] md:pt-0">
        <BackwardButton onClick={() => setCurStep(STEPS.INPUT_EMAIL)} className="mb-[30px]" />
        <ProgressBar value={(1 / 3) * 100} />
        <p
          className="pb-[20px]
          pt-[40px] font-urwgeometric_medium text-[36px] leading-[110%] 
          text-gray_1 samsungS8:text-[40px]
          md:pb-[50px] md:pt-[15px] md:text-[48px] md:leading-[130%]"
        >
          Create a Password
        </p>
      </div>
      <Form
        onSubmit={async () => {
          setCurStep(STEPS.CHECK_POLICIES)
        }}
        validationSchema={validation}
        className="flex w-full grow
      flex-col items-center justify-end
      md:justify-between"
      >
        <TextInput
          type="password"
          id="userpass"
          name="userpass"
          value={userPassword}
          onChange={setUserPassword}
          placeholder="Enter Password..."
          label="Password"
          classNameError="!text-gray_2 mb-[20px] md:mb-0"
          infoText={
            "Your Password needs to be at least 8 symbols. We recommend a\nmixture of symbols and numbers."
          }
        />
        <Button
          id="create-password"
          type="submit"
          className="h-[48px] w-full
          border-x-[1px] border-b-[2px]
          border-x-[#A1EA04] border-b-[#A1EA04]
          font-urwgeometric_bold text-black
          shadow-[0px_0px_40px_0px_#a1ea0466]"
          pulseColor="white"
        >
          Continue
        </Button>
      </Form>
    </>
  )
}

export default CreatePassword
