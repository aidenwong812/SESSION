import { collection, getDocs } from "firebase/firestore"
import { db } from "./db"

const getRoomsByStudioId = async (studioId) => {
  try {
    const docsRef = await getDocs(collection(db, `studios/${studioId}/rooms`))

    return docsRef.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  } catch (error) {
    return { error }
  }
}

export default getRoomsByStudioId
