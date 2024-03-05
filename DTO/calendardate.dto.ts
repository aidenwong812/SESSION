import { IsString } from "class-validator"

export class CalendarDateDTO {
  @IsString()
  startDay: Date

  @IsString()
  endDay: Date

  @IsString()
  calendarId: string
}
