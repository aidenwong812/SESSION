import { collection, getDocs, query, where, and, getDoc, doc } from "firebase/firestore"
import { db } from "./db"

const getSessionRequests = async (studioId) => {
  try {
    const requestQuery = query(
      collection(db, "requests"),
      and(where("type", "==", "session"), where("studioId", "==", studioId)),
    )

    const requestSnapshot = await getDocs(requestQuery)

    const requestData = requestSnapshot.docs.map((data) => ({
      id: data.id,
      studioId: data.data().studioId,
      studio: {},
      roomName: data.data().roomName,
      room: {},
      event: data.data().event,
      ...data.data(),
    }))

    const roomNameSet = new Set()
    const studioIdsSet = new Set()
    requestSnapshot.docs.forEach((requestDoc) => {
      roomNameSet.add(requestDoc.data().roomName)
    })
    requestSnapshot.docs.forEach((requestDoc) => studioIdsSet.add(requestDoc.data().studioId))
    const roomNames = Array.from(roomNameSet)
    const studioIds = Array.from(studioIdsSet)
    const roomDocs = await Promise.all(
      roomNames.map(async (name) => {
        const q = query(collection(db, `studios/${studioId}/rooms`), where("name", "==", name))
        const docsRef = await getDocs(q)
        return docsRef.docs.map((one) => ({
          name: one.data().name,
          ...one.data(),
        }))
      }),
    )
    const studioDocs = await Promise.all(
      studioIds.map(async (id: string) => getDoc(doc(db, "studios", id))),
    )

    requestData.forEach((request) => {
      const room = roomDocs.find((studioDoc) => studioDoc[0]?.name === request.roomName)
      request.room = room ? room[0] : null
      const studio = studioDocs.find((studioDoc) => studioDoc.id === request.studioId)
      request.studio = studio.data()
    })

    return requestData
  } catch (error) {
    return { error }
  }
}

export default getSessionRequests
