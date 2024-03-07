import { createHandler, Post, Body } from "next-api-decorators"
import sendEmail from "@/lib/sendEmail"
import { AccpetSessionDTO } from "@/DTO/acceptsession.dto"
import { SESSION_EMAIL, acceptMail } from "@/lib/consts/mail"
import getSessionByRequestId from "@/lib/firebase/getSessionByRequestId"
import sendInvite from "@/lib/sendInvite"

class sendAcceptedSession {
  @Post()
  async sendAcceptedSession(@Body() body: AccpetSessionDTO) {
    const { requestId, studioNotes, accessToken } = body
    const request: any = await getSessionByRequestId(requestId)

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
          value: acceptMail(studioNotes),
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
      sendInvite(accessToken, request.email)
      const response = await sendEmail(data)
      return response.data
    } catch (err) {
      return err.response.data
    }
  }
}

export default createHandler(sendAcceptedSession)
