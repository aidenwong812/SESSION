import axios from "axios"

const getStudioCalendarEvents = async (calendarId, startDay, endDay) => {
  try {
    const response = await axios.get("/api/calendar", {
      params: {
        calendarId,
        startDay,
        endDay,
      },
    })

    if (!response?.data?.success) return { error: response.data.error }

    return response.data.result
  } catch (error) {
    return { error }
  }
}

export default getStudioCalendarEvents
