import { IsString } from "class-validator"

export class DeclineSessionDTO {
  @IsString()
  requestId: string

  @IsString()
  studioNotes: string
}
