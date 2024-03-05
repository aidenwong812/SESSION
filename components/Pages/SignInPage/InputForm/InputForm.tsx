import { useAuth } from "@/providers/AuthProvider"
import TextInput from "../../../TextInput"

const InputForm = () => {
  const { userEmail, setUserEmail, userPassword, setUserPassword } = useAuth()

  return (
    <div className="flex flex-col gap-y-[10px]">
      <TextInput
        type="text"
        id="useremail"
        name="useremail"
        value={userEmail}
        onChange={setUserEmail}
        placeholder="Enter Email..."
        label="Email"
      />
      <TextInput
        type="password"
        id="userpass"
        name="userpass"
        value={userPassword}
        onChange={setUserPassword}
        placeholder="Enter Password..."
        label="Password"
      />
    </div>
  )
}

export default InputForm
