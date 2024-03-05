import { createHandler, Get, Query } from "next-api-decorators"
import getVisits from "@/lib/firebase/getVisits"

class GetVisits {
  @Get()
  async get(@Query() query) {
    try {
      const { startTime, endTime } = query
      const minimumStartTime = startTime || 0
      const maximumEndTime = endTime || Number.MAX_SAFE_INTEGER

      const totalVisits = await getVisits(
        parseInt(minimumStartTime, 10),
        parseInt(maximumEndTime, 10),
      )

      return {
        success: true,
        result: totalVisits,
      }
    } catch (error) {
      return {
        success: false,
        error,
      }
    }
  }
}

export default createHandler(GetVisits)
