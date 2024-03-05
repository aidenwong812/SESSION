import { IsString } from "class-validator"

export class CalendarCreateEventDTO {
  @IsString()
  start: string

  @IsString()
  end: string

  @IsString()
  studioCalendarEmail: string
}
