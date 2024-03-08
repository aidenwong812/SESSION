import { createHandler, Post, Body } from "next-api-decorators"
import sendEmail from "@/lib/sendEmail"
import { DeclineSessionDTO } from "@/DTO/declinesession.dto"
import deleteSessionRequest from "@/lib/firebase/deleteSessionRequest"
import { SESSION_EMAIL, declineMail } from "@/lib/consts/mail"

class sendDeclinedSession {
  @Post()
  async sendDeclinedSession(@Body() body: DeclineSessionDTO) {
    const { request, studioNotes } = body

    const personalizations = [
      {
        to: [{ email: request.email, name: "Session" }],
        subject: "Session",
      },
    ]

    const data = {
      personalizations,
      content: [
        {
          type: "text/html",
          value: declineMail(studioNotes),
        },
      ],
      from: {
        email: SESSION_EMAIL,
        name: "SESSION",
      },
      reply_to: {
        email: SESSION_EMAIL,
        name: "SESSION",
      },
    }

    try {
      await deleteSessionRequest(request.id)
      const response = await sendEmail(data)
      return response.data
    } catch (err) {
      return err.response.data
    }
  }
}

export default createHandler(sendDeclinedSession)
