import { and, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"
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
        studioId: data.data().studioId,
        studio: {},
        tracks,
        ...data.data(),
      }
    })
    const studioIdsSet = new Set()
    requestData.forEach((data) => studioIdsSet.add(data.studioId))
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

export default getProjectRequests
