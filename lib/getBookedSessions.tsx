import axios from "axios"

const getBookedSessions = async (startTime, endTime, studioId) => {
  try {
    const response = await axios.get("/api/sessions", {
      params: {
        startTime,
        endTime,
        studioId,
      },
    })

    return response.data.result
  } catch (error) {
    return { error }
  }
}

export default getBookedSessions
