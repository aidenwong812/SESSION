import { and, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "./db"

const getBookedSessions = async () => {
  try {
    const q = query(
      collection(db, "requests"),
      and(where("type", "==", "session"), where("booked", "==", true)),
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

export default getBookedSessions
