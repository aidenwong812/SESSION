import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth"
import handleTxError from "../handleTxError"
import { auth } from "./db"

const userRegister = async (email, password) => {
  try {
    const credential = await createUserWithEmailAndPassword(auth, email, password)

    await sendEmailVerification(auth.currentUser)

    return credential.user.uid as any
  } catch (err) {
    handleTxError(err)
    return { error: err }
  }
}

export default userRegister
