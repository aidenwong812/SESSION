import axios from "axios"
import handleTxError from "../handleTxError"

const getUserDataByEmail = async (email) => {
  try {
    const response = await axios.get("/api/auth/getUserByEmail", {
      params: {
        email,
      },
    })

    return response.data.result
  } catch (error) {
    handleTxError(error)
    return null
  }
}

export default getUserDataByEmail
