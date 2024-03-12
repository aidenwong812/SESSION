import { IsString } from "class-validator"

export class DeclineProjectDTO {
  request: any

  @IsString()
  studioNotes: string
}
