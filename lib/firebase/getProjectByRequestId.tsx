import { doc, getDoc } from "firebase/firestore"
import { db } from "./db"

const getProjectByRequestId = async (id) => {
  try {
    const projectDoc = await getDoc(doc(db, "requests", id))

    return {
      id: projectDoc.id,
      ...projectDoc.data(),
    }
  } catch (error) {
    return { error }
  }
}

export default getProjectByRequestId
