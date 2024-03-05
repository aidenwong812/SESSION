import { signInWithPopup, TwitterAuthProvider } from "firebase/auth"
import { auth } from "./db"
import handleTxError from "../handleTxError"

const signInWithTwitter = async () => {
  try {
    const provider = new TwitterAuthProvider()
    const response = await signInWithPopup(auth, provider)
    const credential = TwitterAuthProvider.credentialFromResult(response)

    return credential
  } catch (error) {
    handleTxError(error)
    return { error }
  }
}

export default signInWithTwitter
