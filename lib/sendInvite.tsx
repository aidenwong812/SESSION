import axios from "axios"

const sendInvite = async (accessToken, email) => {
  const calendarId = process.env.NEXT_PUBLIC_CALENDAR_CLIENT_ID
  const calendarApiKey = process.env.NEXT_PUBLIC_CALENDAR_API_KEY

  try {
    const response = await axios.post(
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${calendarApiKey}`,
      {
        summary: "Session Invite",
        description: "Session Invite",
        start: {
          dateTime: new Date().toISOString(),
          timeZone: "America/New_York",
        },
        end: {
          dateTime: new Date().toISOString(),
          timeZone: "America/New_York",
        },
        attendees: [
          {
            email,
            responseStatus: "accepted",
          },
        ],
        reminders: {
          useDefault: false,
          overrides: [
            { method: "email", minutes: 24 * 60 },
            { method: "popup", minutes: 10 },
          ],
        },
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      })

    return response
  } catch (err) {
    throw new Error(err)
  }
}

export default sendInvite
