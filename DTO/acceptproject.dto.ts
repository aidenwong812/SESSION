import { IsString } from "class-validator"

export class AccpetProjectDTO {
  request: any

  @IsString()
  studioNotes: string
}
