import axios from "axios"

const getBookedSessionsCount = async () => {
  try {
    const response = await axios.get("/api/sessions/booked")

    return response.data.result.length
  } catch (error) {
    return { error }
  }
}

export default getBookedSessionsCount
