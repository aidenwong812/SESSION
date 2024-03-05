import { IsString } from "class-validator"

export class ShareCalendarDTO {
  @IsString()
  email: string

  @IsString()
  accessToken: string
}
