import { createHandler, Get, Query } from "next-api-decorators"
import { google } from "googleapis"
import { JWT } from "google-auth-library"
import { CalendarDateDTO } from "@/DTO/calendardate.dto"
import SESSION_CALENDAR_CREDENTIAL from "@/lib/consts/session-calendar-credential"
import { MONTLY_PATTERN, WEEKLY_PATTERN } from "@/lib/consts/iCalendar-rule-freq-patterns"
import getWeeklyEvents from "@/lib/getWeeklyEvents"
import getMontlyEvent from "@/lib/getMontlyEvents"

class GetStudioCalendarEvents {
  @Get()
  async getSessionCalendarEvents(@Query() query: CalendarDateDTO) {
    try {
      const { startDay, endDay, calendarId } = query
      const SCOPES = ["https://www.googleapis.com/auth/calendar"]

      const jwtClient = new JWT({
        email: SESSION_CALENDAR_CREDENTIAL.client_email,
        key: SESSION_CALENDAR_CREDENTIAL.private_key.replace(/\\n/g, "\n"),
        scopes: SCOPES,
      })

      await jwtClient.authorize()
      const calendar = google.calendar({ version: "v3", auth: jwtClient })

      const studioCalendar = await calendar.calendars.get({
        calendarId,
      })

      const studioCalendarTimeZone = studioCalendar.data.timeZone

      const response = await calendar.events.list({
        calendarId,
        timeMin: new Date(startDay).toISOString(),
        timeMax: new Date(endDay).toISOString(),
        maxResults: 250,
      })

      const events = response.data.items.filter((event) => event.status === "confirmed")

      let result = []

      events.forEach((event) => {
        if (event?.recurrence) {
          const eventRule = event.recurrence[0]

          const isWeekly = eventRule.includes(WEEKLY_PATTERN)
          const isMonthly = eventRule.includes(MONTLY_PATTERN)

          let patchedEvents = []
          if (isWeekly)
            patchedEvents = getWeeklyEvents(event, startDay, endDay, studioCalendarTimeZone)
          if (isMonthly) patchedEvents = getMontlyEvent(event, startDay)
          result = result.concat(patchedEvents)
          return
        }

        result.push({
          start: event.start?.dateTime || event.start?.date,
          end: event.end?.dateTime || event.end?.date,
          summary: event?.summary || "",
        })
      })

      return {
        success: true,
        result,
      }
    } catch (error) {
      return {
        success: false,
        error,
      }
    }
  }
}

export default createHandler(GetStudioCalendarEvents)
