import axios from "axios"

const shareCalendarWithSession = async (accessToken) => {
  try {
    const response = await axios.post("/api/calendar/shareCalendar", {
      accessToken,
    })

    return response.data
  } catch (error) {
    return { error }
  }
}

export default shareCalendarWithSession
