import { createHandler, Get, Query } from "next-api-decorators"
import getProjectsByTimestamp from "@/lib/firebase/getProjectsByTimestamp"

class GetProjects {
  @Get()
  async getProjects(@Query() query) {
    try {
      const { startTime, endTime } = query
      const minimumStartTime = startTime || 0
      const maxmumEndTime = endTime || Number.MAX_SAFE_INTEGER

      const projects = await getProjectsByTimestamp(minimumStartTime, maxmumEndTime)

      return {
        success: true,
        result: projects,
      }
    } catch (error) {
      return {
        success: false,
        error,
      }
    }
  }
}

export default createHandler(GetProjects)
