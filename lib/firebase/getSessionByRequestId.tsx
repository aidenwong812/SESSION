import { doc, getDoc } from "firebase/firestore"
import { db } from "./db"

const getSessionByRequestId = async (sessionId) => {
  try {
    const sessionDoc = await getDoc(doc(db, "requests", sessionId))
    const studioDoc = await getDoc(doc(db, "studios", sessionDoc.data().studioId))

    return {
      id: sessionDoc.id,
      ...sessionDoc.data(),
      studio: {
        ...studioDoc.data(),
      },
    }
  } catch (error) {
    return { error }
  }
}

export default getSessionByRequestId
