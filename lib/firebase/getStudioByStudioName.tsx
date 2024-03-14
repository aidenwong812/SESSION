import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "./db"

const getStudioByStudioName = async (studioName) => {
  try {
    const q = query(collection(db, "studios"), where("name", "==", studioName))

    const querySnapshot = await getDocs(q)

    return querySnapshot.docs.map((data) => ({
      id: data.id,
      ...data.data(),
    }))
  } catch (error) {
    return { error }
  }
}

export default getStudioByStudioName
