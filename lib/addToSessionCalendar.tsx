import axios from "axios"

const addToSessionCalendar = async (start, end, studioCalendarEmail) => {
  try {
    const response = await axios.post("/api/calendar/createEvent", {
      start,
      end,
      studioCalendarEmail,
    })

    return response.data.timeZone
  } catch (error) {
    return { error }
  }
}

export default addToSessionCalendar
