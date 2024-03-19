import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore"
import { db } from "./db"

const getSessionByRequestId = async (sessionId) => {
  try {
    const sessionDoc = await getDoc(doc(db, "requests", sessionId))
    const studioDoc = await getDoc(doc(db, "studios", sessionDoc.data().studioId))
    const q = query(
      collection(db, `studios/${sessionDoc.data().studioId}/rooms`),
      where("name", "==", sessionDoc.data().roomName),
    )
    const docsRef = await getDocs(q)
    const roomDocs = docsRef.docs.map((one) => ({
      ...one.data(),
    }))

    return {
      id: sessionDoc.id,
      ...sessionDoc.data(),
      studio: {
        ...studioDoc.data(),
      },
      room: {
        ...roomDocs[0],
      },
    }
  } catch (error) {
    return { error }
  }
}

export default getSessionByRequestId
