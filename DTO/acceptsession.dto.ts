import { IsString } from "class-validator"

export class AccpetSessionDTO {
  @IsString()
  requestId: string

  @IsString()
  studioNotes: string

  @IsString()
  accessToken: string
}
