import { createHandler, Post, Body } from "next-api-decorators"
import sendEmail from "@/lib/sendEmail"
import { DeclineProjectDTO } from "@/DTO/declineproject.dto"
import deleteRequest from "@/lib/firebase/deleteRequest"
import { SESSION_EMAIL, declineProjectMail } from "@/lib/consts/mail"

class sendDeclinedProject {
  @Post()
  async sendDeclinedProject(@Body() body: DeclineProjectDTO) {
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
          value: declineProjectMail(request.projectName, studioNotes),
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

export default createHandler(sendDeclinedProject)
