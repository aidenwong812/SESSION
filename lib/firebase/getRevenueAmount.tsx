import { and, collection, where, query, getDocs } from "firebase/firestore"
import { db } from "./db"

const getRevenueAmount = async (studioId, roomName, startTime, endTime) => {
  try {
    const q = query(
      collection(db, "revenue"),
      and(
        where("studioId", "==", studioId),
        where("roomName", "==", roomName),
        where("createdAt", ">=", startTime),
        where("createdAt", "<=", endTime),
      ),
    )

    const querySnapShot = await getDocs(q)
    return querySnapShot.docs.reduce((a, b) => a + b.data().amount, 0)
  } catch (error) {
    return { error }
  }
}

export default getRevenueAmount
