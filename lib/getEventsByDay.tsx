import { and, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "./firebase/db"

const getEventsByDay = async (date, studioId) => {
  try {
    const q = query(
      collection(db, "requests"),
      and(where("selectedDay", "==", date), where("studioId", "==", studioId)),
    )

    const querySnapShot = await getDocs(q)

    return querySnapShot.docs.map((data) => ({
      id: data.id,
      ...data.data(),
    }))
  } catch (error) {
    return { error }
  }
}

export default getEventsByDay
