import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore"
import handleTxError from "../handleTxError"
import { db } from "./db"

const addAdminCalendarToStudio = async (id, name, calendarEmail) => {
  try {
    const studio = await getDoc(doc(db, "studios", id))

    if (!studio.exists()) {
      const newStudio = await addDoc(collection(db, "studios"), {
        id,
        name,
        calendarEmail,
      })

      return newStudio
    }

    const response = await updateDoc(doc(db, "studios", studio.id), {
      calendarEmail,
    })

    return response
  } catch (err) {
    handleTxError(err)
    return { error: err }
  }
}

export default addAdminCalendarToStudio
