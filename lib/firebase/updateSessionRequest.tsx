import { doc, updateDoc } from "firebase/firestore"
import { db } from "./db"

const updateSessionRequest = async ({ id, sessionPrice, engineerPrice, studioNotes }) => {
  try {
    const response = await updateDoc(doc(db, "requests", id), {
      sessionPrice,
      engineerPrice,
      studioNotes,
    })

    return response
  } catch (error) {
    return { error }
  }
}

export default updateSessionRequest
