import { doc, getDoc } from "firebase/firestore"
import { db } from "./db"

const getStudioByStudioId = async (id) => {
  try {
    const studioDoc = await getDoc(doc(db, "studios", id))

    return {
      id: studioDoc.id,
      ...studioDoc.data(),
    }
  } catch (error) {
    return { error }
  }
}

export default getStudioByStudioId
