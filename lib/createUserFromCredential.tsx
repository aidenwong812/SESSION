import { addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { db } from "./firebase/db"

const createUserFromCredential = async (user) => {
  try {
    const q = query(collection(db, "users"), where("uid", "==", user.uid))

    const querySnapshot = await getDocs(q)

    if (querySnapshot.size > 0) {
      await updateDoc(doc(db, "users", querySnapshot.docs[0].id), {
        ...querySnapshot.docs[0].data(),
        ...user.providerData[0],
        uid: user.uid,
      })

      return {
        ...querySnapshot.docs[0].data(),
        ...user.providerData[0],
        uid: user.uid,
      }
    }

    await addDoc(collection(db, "users"), {
      ...user.providerData[0],
      uid: user.uid,
    })

    return {
      ...user.providerData[0],
      uid: user.uid,
    }
  } catch (error) {
    return { error }
  }
}

export default createUserFromCredential
