import { and, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "./db"

const getProjectByUser = async ({ studioId, email }) => {
  try {
    const requestQuery = query(
      collection(db, "requests"),
      and(
        where("studioId", "==", studioId),
        where("email", "==", email),
        where("type", "==", "project"),
      ),
    )
    const querySnapshot = await getDocs(requestQuery)
    return querySnapshot.docs.map((data) => ({
      id: data.id,
      ...data.data(),
    }))
  } catch (error) {
    return []
  }
}

export default getProjectByUser
