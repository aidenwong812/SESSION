import axios from "axios"
import handleTxError from "./handleTxError"
import { auth } from "./firebase/db"

const sendSessionAccepted = async (data) => {
  try {
    const accessToken = await auth.currentUser.getIdToken()
    const response = await axios.post("/api/sessions/accepted", { ...data, accessToken })

    return response
  } catch (error) {
    handleTxError(error)
    return { error }
  }
}

export default sendSessionAccepted
