import axios from "axios"

const getRevenueAmountByPeriod = async (startTime, endTime) => {
  try {
    const response = await axios.get("/api/revenue", {
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

export default getRevenueAmountByPeriod
