import axios from "axios"

const getBookedProjectsCount = async () => {
  try {
    const response = await axios.get("/api/projects/booked")

    return response.data.result.length
  } catch (error) {
    return { error }
  }
}

export default getBookedProjectsCount
