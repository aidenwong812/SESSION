import { addDoc, collection } from "firebase/firestore"
import { db } from "./db"

const requestSession = async (
  email,
  bandName,
  instruments,
  sessionDetail,
  comingPeople,
  isEngineerNeeded,
  selectedDay,
  event,
  studioId,
) => {
  try {
    const sessionDocRef = await addDoc(collection(db, "requests"), {
      email,
      bandName,
      instruments,
      sessionDetail,
      comingPeople,
      isEngineerNeeded,
      selectedDay,
      event,
      studioId,
      type: "session",
      createdAt: Date.now(),
      booked: false,
    })

    return sessionDocRef
  } catch (error) {
    return { error }
  }
}

export default requestSession
