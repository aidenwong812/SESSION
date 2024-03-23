import { and, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "./db"

const getProjectRequests = async (studioId) => {
  try {
    const requestQuery = query(
      collection(db, "requests"),
      and(where("type", "==", "project"), where("studioId", "==", studioId)),
    )

    const requestSnapshot = await getDocs(requestQuery)

    const requestData = requestSnapshot.docs.map((data) => {
      const { trackList } = data.data()
      const tracks = trackList.map((one) => ({
        name: one.name,
        tracks: Object.keys(one).filter((_) => _ !== "name"),
      }))
      return {
        id: data.id,
        tracks,
        ...data.data(),
      }
    })

    return requestData
  } catch (error) {
    return { error }
  }
}

export default getProjectRequests
