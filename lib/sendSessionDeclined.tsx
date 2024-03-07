import axios from "axios"
import handleTxError from "./handleTxError"

const sendSessionDeclined = async (data) => {
  try {
    const response = await axios.post("/api/sessions/declined", data)

    return response
  } catch (error) {
    handleTxError(error)
    return { error }
  }
}

export default sendSessionDeclined
