import { doc, getDoc } from "firebase/firestore"
import { db } from "./db"

const getProjectByRequestId = async (sessionId) => {
  try {
    const projectDoc = await getDoc(doc(db, "requests", sessionId))

    return {
      id: projectDoc.id,
      ...projectDoc.data(),
    }
  } catch (error) {
    return { error }
  }
}

export default getProjectByRequestId
