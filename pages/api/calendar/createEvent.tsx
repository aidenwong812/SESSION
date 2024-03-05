import { createHandler, Post, Body } from "next-api-decorators"
import { google } from "googleapis"
import { JWT } from "google-auth-library"
import { CalendarCreateEventDTO } from "@/DTO/createevent.dto"
import SESSION_CALENDAR_CREDENTIAL from "@/lib/consts/session-calendar-credential"

class CreateSessionCalenderEvents {
  @Post()
  async getSessionCalendarEvents(@Body() body: CalendarCreateEventDTO) {
    try {
      const { start, end, studioCalendarEmail } = body
      const SCOPES = ["https://www.googleapis.com/auth/calendar"]

      const jwtClient = new JWT({
        email: SESSION_CALENDAR_CREDENTIAL.client_email,
        key: SESSION_CALENDAR_CREDENTIAL.private_key,
        scopes: SCOPES,
      })

      await jwtClient.authorize()
      const calendar = google.calendar({ version: "v3", auth: jwtClient })

      const calendarInfo = await calendar.calendars.get({
        calendarId: studioCalendarEmail,
      })

      const { timeZone } = calendarInfo.data

      const result = await calendar.events.insert({
        auth: jwtClient,
        calendarId: studioCalendarEmail,
        requestBody: {
          summary: "Session",
          start: {
            dateTime: start,
            timeZone,
          },
          end: {
            dateTime: end,
            timeZone,
          },
        },
      })

      return { sucess: true, result, timeZone }
    } catch (err) {
      throw new Error(err)
    }
  }
}

export default createHandler(CreateSessionCalenderEvents)
