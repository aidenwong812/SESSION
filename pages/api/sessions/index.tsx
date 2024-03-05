import { createHandler, Get, Query } from "next-api-decorators"
import { google } from "googleapis"
import { DateTime } from "luxon"
import getCalendarJWTClient from "@/lib/getCalendarJWTClient"
import getDocument from "@/lib/firebase/getDocument"
import getSessionsByStudioId from "@/lib/getSessionsByStudioId"

class GetSessions {
  @Get()
  async getSessionCalendarEvents(@Query() query) {
    try {
      const { startTime, endTime, studioId } = query
      const minimumStartTime = startTime || 0
      const maxmumEndTime = endTime || Number.MAX_SAFE_INTEGER

      const studioData: any = await getDocument("studios", studioId)
      if (studioData?.error)
        return {
          success: false,
          result: null,
        }

      const jwtClient = await getCalendarJWTClient()
      const calendar = google.calendar({ version: "v3", auth: jwtClient })
      const calendarInfo = await calendar.calendars.get({
        calendarId: studioData.calendarEmail,
      })
      const { timeZone } = calendarInfo.data

      const sessions = await getSessionsByStudioId(studioData.id)
      const filteredSessions = sessions.filter((session: any) => {
        const sessionEventStartTime = DateTime.fromISO(session.event.start.dateTime, {
          zone: timeZone,
        })
        const sessionEventStartEpochTime = sessionEventStartTime.toMillis()

        if (
          sessionEventStartEpochTime >= minimumStartTime &&
          sessionEventStartEpochTime <= maxmumEndTime
        )
          return true
        return false
      })

      return {
        success: true,
        result: filteredSessions,
      }
    } catch (error) {
      return {
        success: false,
        error,
      }
    }
  }
}

export default createHandler(GetSessions)
