import { IsString } from "class-validator"

export class DeclineSessionDTO {
  @IsString()
  requestId: string
}
