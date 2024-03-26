import { addDoc, collection } from "firebase/firestore"
import { db } from "./db"

const addRevenue = async ({ studioId, roomName, amount }) => {
  try {
    const revenueDocRef = await addDoc(collection(db, "revenue"), {
      studioId,
      roomName,
      amount,
      createdAt: Date.now(),
    })

    return revenueDocRef
  } catch (error) {
    return { error }
  }
}

export default addRevenue
