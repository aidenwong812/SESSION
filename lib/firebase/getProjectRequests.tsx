import { collection, getDocs, query, where, and } from "firebase/firestore"
import { db } from "./db"

const getProjectRequests = async () => {
  try {
    const requestQuery = query(collection(db, "requests"), and(where("type", "==", "project")))

    const requestSnapshot = await getDocs(requestQuery)

    const requestData = requestSnapshot.docs.map((data) => ({
      id: data.id,
      ...data.data(),
    }))

    return requestData
  } catch (error) {
    return { error }
  }
}

export default getProjectRequests
