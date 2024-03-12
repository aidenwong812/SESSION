import axios from "axios"
import handleTxError from "./handleTxError"

const sendProjectAccepted = async (data) => {
  try {
    const response = await axios.post("/api/projects/accepted", data)

    return response
  } catch (error) {
    handleTxError(error)
    return { error }
  }
}

export default sendProjectAccepted
