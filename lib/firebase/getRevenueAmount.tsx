import { and, collection, where, query, getAggregateFromServer, sum } from "firebase/firestore"
import { db } from "./db"

const getRevenueAmount = async (startTime, endTime) => {
  try {
    const q = query(
      collection(db, "revenue"),
      and(where("createdAt", ">=", startTime), where("createdAt", "<=", endTime)),
    )

    const aggregateSnapshot = await getAggregateFromServer(q, {
      totalAmount: sum("amount"),
    })

    return aggregateSnapshot.data().totalAmount
  } catch (error) {
    return { error }
  }
}

export default getRevenueAmount
