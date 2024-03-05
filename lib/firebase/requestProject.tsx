import { addDoc, collection } from "firebase/firestore"
import { db } from "./db"

const requestProject = async (
  bandName,
  links,
  projectName,
  genre,
  projectDesc,
  timeframe,
  trackList,
  instruments,
) => {
  try {
    const projectDocRef = await addDoc(collection(db, "requests"), {
      bandName,
      links,
      projectName,
      genre,
      projectDesc,
      timeframe,
      trackList,
      instruments,
      type: "project",
      createdAt: Date.now(),
      booked: false,
    })

    return projectDocRef
  } catch (error) {
    return { error }
  }
}

export default requestProject
