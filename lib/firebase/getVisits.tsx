import { and, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "./db"

const getVisits = async (startTime, endTime) => {
  try {
    const q = query(
      collection(db, "visits"),
      and(where("createdAt", ">=", startTime), where("createdAt", "<=", endTime)),
    )

    const querySnapshot = await getDocs(q)

    return querySnapshot.size
  } catch (error) {
    return { error }
  }
}

export default getVisits
