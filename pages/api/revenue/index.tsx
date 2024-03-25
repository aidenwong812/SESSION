import { createHandler, Get, Query } from "next-api-decorators"
import getRevenueAmount from "../../../lib/firebase/getRevenueAmount"

class GetRevenueAmount {
  @Get()
  async get(@Query() query) {
    try {
      const { startTime, endTime } = query
      const miniumStartTime = startTime || 0
      const maximumEndTime = endTime || Number.MAX_SAFE_INTEGER

      const totalAmount = await getRevenueAmount(
        parseInt(miniumStartTime, 10),
        parseInt(maximumEndTime, 10),
      )

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
  async createRevenue()
}

export default createHandler(GetRevenueAmount)
