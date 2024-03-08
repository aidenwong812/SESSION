import { IsString } from "class-validator"

export class DeclineSessionDTO {
  request: any

  @IsString()
  studioNotes: string
}
