import { createHandler, Post, Body } from "next-api-decorators"
import sendEmail from "@/lib/sendEmail"
import { AccpetProjectDTO } from "@/DTO/acceptproject.dto"
import { SESSION_EMAIL, acceptFreeMail } from "@/lib/consts/mail"
import getMonthName from "@/lib/getMonthName"
import getWeekDay from "@/lib/getWeekDay"
import convertTimeFormat from "@/lib/convertTimeFormat"

class sendAcceptedProject {
  @Post()
  async sendAcceptedProject(@Body() body: AccpetProjectDTO) {
    const { request, studioNotes } = body
    console.log(request)

    const emailData = {
      requestId: request.id,
      month: getMonthName(request.selectedDay.month),
      day: request.selectedDay.day,
      weekDay: getWeekDay(request.selectedDay),
      time: `${convertTimeFormat(request.event.start.dateTime)} - ${convertTimeFormat(
        request.event.end.dateTime,
      )}`,
      studioName: request.studio.name,
      comingPeople: request.comingPeople,
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
          value: acceptFreeMail(emailData),
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
