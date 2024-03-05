import { createHandler, Get, Query } from "next-api-decorators"
import { UserByEmailDTO } from "@/DTO/getuserbyemail.dto"
import admin from "@/lib/firebase/admin"

class GetUserByEmail {
  @Get()
  async getUserByEmail(@Query() query: UserByEmailDTO) {
    try {
      const auth = admin.auth()
      const result = await auth.getUserByEmail(query.email)
      return {
        success: true,
        result,
      }
    } catch (error) {
      return {
        success: false,
        error,
      }
    }
  }
}

export default createHandler(GetUserByEmail)
