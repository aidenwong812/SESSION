import axios from "axios"
import handleTxError from "./handleTxError"

const sendSessionAccepted = async (data) => {
  try {
    const response = await axios.post("/api/sessions/accepted", data)

    return response
  } catch (error) {
    handleTxError(error)
    return { error }
  }
}

export default sendSessionAccepted
