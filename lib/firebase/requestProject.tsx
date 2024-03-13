import { addDoc, collection } from "firebase/firestore"
import { db } from "./db"

const requestProject = async (
  email,
  bandName,
  links,
  projectName,
  genre,
  projectDesc,
  timeframe,
  trackList,
  instruments,
  pfp,
) => {
  try {
    const projectDocRef = await addDoc(collection(db, "requests"), {
      email,
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
      pfp,
    })

    return projectDocRef
  } catch (error) {
    return { error }
  }
}

export default requestProject
