import { and, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "./db"

const getProjectsByTimestamp = async (startTime, endTime) => {
  try {
    const q = query(
      collection(db, "requests"),
      and(
        where("createdAt", ">=", startTime),
        where("createdAt", "<=", endTime),
        where("type", "==", "project"),
      ),
    )

    const querySnapshot = await getDocs(q)

    return querySnapshot.docs.map((data) => ({
      id: data.id,
      ...data.data(),
    }))
  } catch (error) {
    return { error }
  }
}

export default getProjectsByTimestamp
