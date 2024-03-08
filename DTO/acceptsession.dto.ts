import { IsString } from "class-validator"

export class AccpetSessionDTO {
  request: any

  @IsString()
  studioNotes: string

  @IsString()
  type: string
}
