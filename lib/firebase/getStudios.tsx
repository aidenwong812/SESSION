import { collection, getDocs } from "firebase/firestore"
import { db } from "./db"

const getStudios = async () => {
  try {
    const docsRef = await getDocs(collection(db, "studios"))

    return docsRef.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  } catch (error) {
    return { error }
  }
}

export default getStudios
