import { signInWithEmailAndPassword } from "firebase/auth"
import { toast } from "react-toastify"
import handleTxError from "../handleTxError"
import { auth } from "./db"

const userLogin = async (email, password) => {
  try {
    const credential = await signInWithEmailAndPassword(auth, email, password)

    if (!credential.user.emailVerified) {
      toast.error("Email is not verified")
      return { error: "Email is not verified" }
    }

    return credential
  } catch (err) {
    handleTxError(err)
    return { error: err }
  }
}

export default userLogin
