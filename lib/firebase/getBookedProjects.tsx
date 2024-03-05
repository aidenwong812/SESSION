import { and, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "./db"

const getBookedProjects = async () => {
  try {
    const q = query(
      collection(db, "requests"),
      and(where("type", "==", "project"), where("booked", "==", true)),
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

export default getBookedProjects
