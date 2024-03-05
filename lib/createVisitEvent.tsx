import axios from "axios"

const createVisitEvent = async (email) => {
  try {
    await axios.post("/api/visits/create", { email })
    return true
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error)
    return { error }
  }
}

export default createVisitEvent
