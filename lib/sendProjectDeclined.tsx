import axios from "axios"
import handleTxError from "./handleTxError"

const sendProjectDeclined = async (data) => {
  try {
    const response = await axios.post("/api/projects/declined", data)

    return response
  } catch (error) {
    handleTxError(error)
    return { error }
  }
}

export default sendProjectDeclined
