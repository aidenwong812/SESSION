import { sendPasswordResetEmail } from "firebase/auth"
import { auth } from "./db"
import handleTxError from "../handleTxError"

const sendResetPassLink = async (email) => {
  try {
    const response = await sendPasswordResetEmail(auth, email)

    return response
  } catch (error) {
    handleTxError(error)
    return { error }
  }
}

export default sendResetPassLink
