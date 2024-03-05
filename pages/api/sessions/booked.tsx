import { createHandler, Get } from "next-api-decorators"
import getBookedSessions from "@/lib/firebase/getBookedSessions"

class GetBookedSessions {
  @Get()
  async get() {
    try {
      const bookedProjects = await getBookedSessions()

      return {
        success: true,
        result: bookedProjects,
      }
    } catch (error) {
      return {
        success: false,
        error,
      }
    }
  }
}

export default createHandler(GetBookedSessions)
