import { doc, updateDoc } from "firebase/firestore"
import { db } from "./db"

const updateProjectRequest = async ({ id, projectPrice, studioNotes, booked }) => {
  try {
    const response = await updateDoc(doc(db, "requests", id), {
      projectPrice,
      studioNotes,
      booked,
    })

    return response
  } catch (error) {
    return { error }
  }
}

export default updateProjectRequest
