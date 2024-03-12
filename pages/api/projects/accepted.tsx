import { createHandler, Post, Body } from "next-api-decorators"
import sendEmail from "@/lib/sendEmail"
import { AccpetProjectDTO } from "@/DTO/acceptproject.dto"
import { SESSION_EMAIL, acceptProjectMail } from "@/lib/consts/mail"

class sendAcceptedProject {
  @Post()
  async sendAcceptedProject(@Body() body: AccpetProjectDTO) {
    const { request, studioNotes } = body
    console.log(request)

    const emailData = {
      projectName: request.projectName,
      tracks: request.tracks,
      studioNotes,
    }

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
          value: acceptProjectMail(emailData),
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

export default createHandler(sendAcceptedProject)
