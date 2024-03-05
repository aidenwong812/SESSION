import { and, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "./firebase/db"

const getSessionsByStudioId = async (studioId) => {
  try {
    const q = query(
      collection(db, "requests"),
      and(where("studioId", "==", studioId), where("type", "==", "session")),
    )
    const querySnapshot = await getDocs(q)

    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  } catch (err) {
    return []
  }
}

export default getSessionsByStudioId
