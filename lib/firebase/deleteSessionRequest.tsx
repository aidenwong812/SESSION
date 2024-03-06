import { deleteDoc, doc } from "firebase/firestore"
import { db } from "./db"
import getSessionByRequestId from "./getSessionByRequestId"

const deleteSessionRequest = async (sessionId) => {
  try {
    const request: any = await getSessionByRequestId(sessionId)
    await deleteDoc(doc(db, "requests", sessionId))

    return {
      request,
    }
  } catch (error) {
    return { error }
  }
}

export default deleteSessionRequest
