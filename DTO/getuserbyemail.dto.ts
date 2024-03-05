import { IsString } from "class-validator"

export class UserByEmailDTO {
  @IsString()
  email: string
}
