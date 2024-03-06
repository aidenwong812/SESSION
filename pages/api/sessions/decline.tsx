import { createHandler, Post, Body } from "next-api-decorators"
import sendEmail from "@/lib/sendEmail"
import { DeclineSessionDTO } from "@/DTO/declinesession.dto"
import deleteSessionRequest from "@/lib/firebase/deleteSessionRequest"
import { SESSION_EMAIL, declineMail } from "@/lib/consts/mail"

class sendDeclineSession {
  @Post()
  async sendDeclineSession(@Body() body: DeclineSessionDTO) {
    const { requestId } = body
    const { request } = await deleteSessionRequest(requestId)

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
          value: declineMail,
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
      const response = await sendEmail(data)
      return response.data
    } catch (err) {
      return err.response.data
    }
  }
}

export default createHandler(sendDeclineSession)
