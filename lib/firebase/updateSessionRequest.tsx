import { doc, updateDoc } from "firebase/firestore"
import { db } from "./db"

const updateSessionRequest = async ({
  id,
  sessionPrice = 0,
  engineerPrice = 0,
  studioNotes = "",
  booked = false,
}) => {
  try {
    const response = await updateDoc(doc(db, "requests", id), {
      sessionPrice,
      engineerPrice,
      studioNotes,
      booked,
    })

    return response
  } catch (error) {
    return { error }
  }
}

export default updateSessionRequest
