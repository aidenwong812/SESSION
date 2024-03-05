import { createHandler, Get } from "next-api-decorators"
import getBookedProjects from "@/lib/firebase/getBookedProjects"

class GetBookedProjects {
  @Get()
  async get() {
    try {
      const bookedProjects = await getBookedProjects()

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

export default createHandler(GetBookedProjects)
