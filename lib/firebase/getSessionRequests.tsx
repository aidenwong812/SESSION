import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore"
import { db } from "./db"

const getSessionRequests = async () => {
  try {
    const requestQuery = query(collection(db, "requests"), where("type", "==", "session"))

    const requestSnapshot = await getDocs(requestQuery)

    const requestData = requestSnapshot.docs.map((data) => ({
      id: data.id,
      studioId: data.data().studioId,
      studio: {},
      ...data.data(),
    }))

    const studioIdsSet = new Set()
    requestSnapshot.docs.forEach((requestDoc) => studioIdsSet.add(requestDoc.data().studioId))
    const studioIds = Array.from(studioIdsSet)
    const studioDocs = await Promise.all(
      studioIds.map(async (id: string) => getDoc(doc(db, "studios", id))),
    )

    requestData.forEach((request) => {
      const studio = studioDocs.find((studioDoc) => studioDoc.id === request.studioId)
      request.studio = studio.data()
    })

    return requestData
  } catch (error) {
    return { error }
  }
}

export default getSessionRequests
