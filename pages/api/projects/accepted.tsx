import { createHandler, Post, Body } from "next-api-decorators"
import sendEmail from "@/lib/sendEmail"
import { AccpetProjectDTO } from "@/DTO/acceptproject.dto"
import { SESSION_EMAIL, acceptProjectMail } from "@/lib/consts/mail"

class sendAcceptedProject {
  @Post()
  async sendAcceptedProject(@Body() body: AccpetProjectDTO) {
    const { request, studioNotes } = body

    const emailData = {
      projectName: request.projectName,
      tracks: request.tracks
        .map(
          (one) =>
            `<li key=${one.name} style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;Margin-bottom:15px;margin-left:0;color:#8c8c8c;font-size:14px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;color:#d2d2d2;font-size:14px">${one.name}</p></li>`
        )
        .join(""),
      numberOfTracks: request.tracks.length,
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
