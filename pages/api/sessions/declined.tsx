import { createHandler, Post, Body } from "next-api-decorators"
import sendEmail from "@/lib/sendEmail"
import { DeclineSessionDTO } from "@/DTO/declinesession.dto"
import deleteRequest from "@/lib/firebase/deleteRequest"
import { SESSION_EMAIL, declineSessionMail } from "@/lib/consts/mail"

class sendDeclinedSession {
  @Post()
  async sendDeclinedSession(@Body() body: DeclineSessionDTO) {
    const { request, studioNotes } = body
    const studioImage = request?.studio?.photo.includes("https://")
      ? request?.studio?.photo
      : `https://session-pied.vercel.app${request?.studio?.photo}`

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
          value: declineSessionMail(studioNotes, studioImage),
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
      await deleteRequest(request.id)
      const response = await sendEmail(data)
      return response.data
    } catch (err) {
      return err.response.data
    }
  }
}

export default createHandler(sendDeclinedSession)
