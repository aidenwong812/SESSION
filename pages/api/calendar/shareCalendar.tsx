import { Body, createHandler, Post } from "next-api-decorators"
import { google } from "googleapis"
import { ShareCalendarDTO } from "@/DTO/sharecalendar.dto"
import SESSION_CALENDAR_CREDENTIAL from "@/lib/consts/session-calendar-credential"

class ShareCalendar {
  @Post()
  async shareCalendar(@Body() body: ShareCalendarDTO) {
    try {
      const { accessToken } = body

      const oAuth2Client = new google.auth.OAuth2(
        process.env.NEXT_PUBLIC_CALENDAR_CLIENT_ID,
        process.env.NEXT_PUBLIC_CALENDAR_API_KEY,
        "http://localhost:3000",
      )

      oAuth2Client.setCredentials({
        access_token: accessToken,
      })

      const calendar = google.calendar({ version: "v3", auth: oAuth2Client })

      const calendars = await calendar.calendarList.list({})

      const calendarEmail = calendars.data.items.filter((item) => item.accessRole === "owner")[0].id

      const response = await calendar.acl.insert({
        calendarId: calendarEmail,
        requestBody: {
          role: "writer",
          scope: {
            type: "user",
            value: SESSION_CALENDAR_CREDENTIAL.client_email,
          },
        },
      })

      return { sucess: true, calendarEmail, result: response.data }
    } catch (err) {
      throw new Error(err)
    }
  }
}

export default createHandler(ShareCalendar)
