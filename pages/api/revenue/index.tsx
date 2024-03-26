import { Body, createHandler, Get, Post, Query } from "next-api-decorators"
import { CreateRevenueDTO } from "@/DTO/createrevenue.dto"
import getRevenueAmount from "@/lib/firebase/getRevenueAmount"
import addRevenue from "@/lib/firebase/addRevenue"
import { DEFAULT_STUDIO_ID } from "@/lib/consts/global"
import getRoomsByStudioId from "@/lib/firebase/getRoomsByStudioId"

class GetRevenueAmount {
  @Get()
  async get(@Query() query) {
    try {
      const { studioId, startTime, endTime } = query
      const miniumStartTime = startTime || 0
      const maximumEndTime = endTime || Number.MAX_SAFE_INTEGER
      const currentStudio = studioId || DEFAULT_STUDIO_ID

      const rooms: any = await getRoomsByStudioId(studioId)

      const promise = rooms.map(async (room) => {
        const roomName = room.name
        const amount = await getRevenueAmount(
          currentStudio,
          roomName,
          parseInt(miniumStartTime, 10),
          parseInt(maximumEndTime, 10),
        )
        return {
          roomName,
          amount,
        }
      })
      const totalAmount = await Promise.all(promise)

      return {
        success: true,
        result: totalAmount,
      }
    } catch (error) {
      return {
        success: false,
        error,
      }
    }
  }

  @Post()
  async createRevenue(@Body() body: CreateRevenueDTO) {
    const { studioId, amount, roomName } = body
    if (amount <= 0) {
      return {
        success: false,
      }
    }
    try {
      const response = await addRevenue({ studioId, roomName, amount })
      return {
        success: true,
        result: response,
      }
    } catch (err) {
      return err.response.data
    }
  }
}

export default createHandler(GetRevenueAmount)
