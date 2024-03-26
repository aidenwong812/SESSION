import { IsNumber, IsString } from "class-validator"

export class CreateRevenueDTO {
  @IsString()
  studioId: string

  @IsString()
  roomName: string

  @IsNumber()
  amount: number

  @IsString()
  studioCalendarEmail: string
}
