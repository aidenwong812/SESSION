import { createHandler, Post, Body } from "next-api-decorators"
import { addDoc, collection } from "firebase/firestore"
import { CreateVisitEventDTO } from "@/DTO/createvisitevent.dto"
import { db } from "@/lib/firebase/db"

class CreateVisitEvent {
  @Post()
  async create(@Body() body: CreateVisitEventDTO) {
    try {
      const { email } = body

      if (!email) return { success: false }
      await addDoc(collection(db, "visits"), {
        createdAt: Date.now(),
        email,
      })
      return { sucess: true }
    } catch (err) {
      throw new Error(err)
    }
  }
}

export default createHandler(CreateVisitEvent)
