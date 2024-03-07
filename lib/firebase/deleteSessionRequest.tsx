import { deleteDoc, doc } from "firebase/firestore"
import { db } from "./db"
import getSessionByRequestId from "./getSessionByRequestId"

const deleteSessionRequest = async (requestId) => {
  try {
    const request: any = await getSessionByRequestId(requestId)
    await deleteDoc(doc(db, "requests", requestId))

    return {
      request,
    }
  } catch (error) {
    return { error }
  }
}

export default deleteSessionRequest
