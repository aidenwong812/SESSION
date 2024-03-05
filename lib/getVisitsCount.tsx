import axios from "axios"

const getVisitsCount = async (startTime, endTime) => {
  try {
    const response = await axios.get("/api/visits", {
      params: {
        startTime,
        endTime,
      },
    })

    return response.data.result
  } catch (error) {
    return { error }
  }
}

export default getVisitsCount
