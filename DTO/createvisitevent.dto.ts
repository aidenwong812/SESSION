import { IsString } from "class-validator"

export class CreateVisitEventDTO {
  @IsString()
  email: string
}
