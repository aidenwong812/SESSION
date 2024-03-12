import { doc, updateDoc } from "firebase/firestore"
import { db } from "./db"

const updateProjectRequest = async ({ id, projectPrice, studioNotes }) => {
  try {
    const response = await updateDoc(doc(db, "requests", id), {
      projectPrice,
      studioNotes,
    })

    return response
  } catch (error) {
    return { error }
  }
}

export default updateProjectRequest
