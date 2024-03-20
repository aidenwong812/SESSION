import { deleteDoc, doc } from "firebase/firestore"
import { db } from "./db"

const deleteRequest = async (requestId) => {
  try {
    const response = await deleteDoc(doc(db, "requests", requestId))

    return response
  } catch (error) {
    return { error }
  }
}

export default deleteRequest
