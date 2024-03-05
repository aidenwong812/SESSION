import { doc, getDoc } from "firebase/firestore"
import { db } from "./db"

const getDocument = async (collectionName, docId) => {
  try {
    const document = await getDoc(doc(db, collectionName, docId))

    return {
      id: document.id,
      ...document.data(),
    }
  } catch (error) {
    return { error }
  }
}

export default getDocument
