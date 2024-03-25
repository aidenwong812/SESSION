import axios from "axios"

const createRevenue = async (data) => {
  try {
    const response = await axios.post("/api/revenue", data)

    return response.data
  } catch (error) {
    return { error }
  }
}

export default createRevenue
